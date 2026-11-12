import * as vscode from "vscode";
import { readFile } from "node:fs/promises";
import { buildInsertion, type Variant } from "./snippets";

interface IconMeta {
  name: string;
  title: string;
  category: string;
  tags: string[];
  variants: Variant[];
}

interface IconItem extends vscode.QuickPickItem {
  icon: IconMeta;
}

const SITE = "https://kineticons.fabwaseem.com";
const VARIANTS: { variant: Variant; label: string; detail: string }[] = [
  { variant: "outline", label: "Outline", detail: "Strokes only" },
  { variant: "duotone", label: "Duotone", detail: "Strokes over a soft tint" },
  { variant: "filled", label: "Filled", detail: "Solid shapes" },
];

let root: vscode.Uri;
let icons: Promise<IconMeta[]> | undefined;
const svgs = new Map<Variant, Promise<Record<string, string>>>();

const readJson = async <T>(...path: string[]): Promise<T> =>
  JSON.parse(await readFile(vscode.Uri.joinPath(root, "media", ...path).fsPath, "utf8")) as T;

const loadIcons = () => (icons ??= readJson<IconMeta[]>("icons.json"));

async function svgOf(name: string, variant: Variant): Promise<string> {
  let all = svgs.get(variant);
  if (!all) svgs.set(variant, (all = readJson<Record<string, string>>("svg", `${variant}.json`)));
  const svg = (await all)[name];
  if (!svg) throw new Error(`No ${variant} SVG for ${name}`);
  return svg;
}

async function pickIcon(placeholder: string): Promise<IconMeta | undefined> {
  const qp = vscode.window.createQuickPick<IconItem>();
  qp.placeholder = placeholder;
  qp.matchOnDescription = true;
  qp.matchOnDetail = true;
  qp.busy = true;
  qp.show();
  try {
    qp.items = (await loadIcons()).map((icon) => ({
      icon,
      label: icon.name,
      description: icon.category,
      detail: icon.tags.join(", "),
      iconPath: {
        light: vscode.Uri.joinPath(root, "media", "preview", "light", `${icon.name}.svg`),
        dark: vscode.Uri.joinPath(root, "media", "preview", "dark", `${icon.name}.svg`),
      },
    }));
  } catch (err) {
    qp.dispose();
    throw err;
  }
  qp.busy = false;
  return new Promise((resolve) => {
    let picked: IconMeta | undefined;
    qp.onDidAccept(() => {
      picked = qp.selectedItems[0]?.icon;
      qp.hide();
    });
    qp.onDidHide(() => {
      qp.dispose();
      resolve(picked);
    });
  });
}

async function pickVariant(icon: IconMeta): Promise<Variant | undefined> {
  const options = VARIANTS.filter((v) => icon.variants.includes(v.variant));
  if (options.length <= 1) return options[0]?.variant;
  const choice = await vscode.window.showQuickPick(
    options.map((o) => ({ ...o, description: o.variant === "outline" ? "default" : undefined })),
    { placeHolder: `Style for ${icon.title}` },
  );
  return choice?.variant;
}

async function pickIconAndVariant(placeholder: string) {
  const icon = await pickIcon(placeholder);
  if (!icon) return undefined;
  const variant = await pickVariant(icon);
  return variant ? { icon, variant } : undefined;
}

async function insertIcon() {
  const picked = await pickIconAndVariant("Search Kineticons to insert");
  if (!picked) return;
  const { icon, variant } = picked;
  const svg = await svgOf(icon.name, variant);
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    await vscode.env.clipboard.writeText(svg);
    vscode.window.showInformationMessage(`No open editor: copied the ${variant} ${icon.name} SVG to the clipboard.`);
    return;
  }
  const doc = editor.document;
  const result = buildInsertion(doc.languageId, doc.getText(), icon.name, variant, svg);
  const ok = await editor.edit((b) => {
    for (const e of result.edits) {
      b.replace(new vscode.Range(doc.positionAt(e.offset), doc.positionAt(e.offset + e.length)), e.text);
    }
    for (const sel of editor.selections) b.replace(sel, result.snippet);
  });
  if (!ok) vscode.window.showErrorMessage("Kineticons: could not insert the icon.");
  else if (result.note) vscode.window.showInformationMessage(result.note);
}

async function copySvg() {
  const picked = await pickIconAndVariant("Search Kineticons to copy as SVG");
  if (!picked) return;
  await vscode.env.clipboard.writeText(await svgOf(picked.icon.name, picked.variant));
  vscode.window.setStatusBarMessage(`Copied the ${picked.variant} ${picked.icon.name} SVG`, 3000);
}

async function openInBrowser() {
  const icon = await pickIcon("Search Kineticons to open on the website");
  if (icon) await vscode.env.openExternal(vscode.Uri.parse(`${SITE}/icons/${icon.name}/`));
}

const guard = (fn: () => Promise<void>) => async () => {
  try {
    await fn();
  } catch (err) {
    vscode.window.showErrorMessage(`Kineticons: ${err instanceof Error ? err.message : String(err)}`);
  }
};

export function activate(context: vscode.ExtensionContext) {
  root = context.extensionUri;
  context.subscriptions.push(
    vscode.commands.registerCommand("kineticons.insertIcon", guard(insertIcon)),
    vscode.commands.registerCommand("kineticons.copySvg", guard(copySvg)),
    vscode.commands.registerCommand("kineticons.openInBrowser", guard(openInBrowser)),
  );
}

export function deactivate() {}
