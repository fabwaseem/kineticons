import { Action, ActionPanel, Clipboard, Color, Grid, Icon, Keyboard, showHUD } from "@raycast/api";
import { showFailureToast } from "@raycast/utils";
import { useMemo, useState } from "react";
import {
  capitalize,
  componentOf,
  KineticIcon,
  loadIcons,
  pageOf,
  previewOf,
  reactImport,
  reactJsx,
  Style,
  STYLES,
  styleOf,
  svelteSnippet,
  svgOf,
  vueSnippet,
} from "./icons";

const shortcut = (key: Keyboard.KeyEquivalent, shift = false): Keyboard.Shortcut => ({
  macOS: { modifiers: shift ? ["cmd", "shift"] : ["cmd"], key },
  Windows: { modifiers: shift ? ["ctrl", "shift"] : ["ctrl"], key },
});

function IconActions({ icon, style }: { icon: KineticIcon; style: Style }) {
  // the SVG (a few kB with its motion) is put together only when it is used, not for every icon in the grid
  return (
    <ActionPanel title={icon.name}>
      <ActionPanel.Section>
        <Action
          title="Copy SVG"
          icon={Icon.Clipboard}
          onAction={async () => {
            try {
              await Clipboard.copy(svgOf(icon, style));
              await showHUD("Copied SVG to Clipboard");
            } catch (error) {
              await showFailureToast(error, { title: "Could not copy the SVG" });
            }
          }}
        />
        <Action
          title="Paste SVG"
          icon={Icon.AppWindow}
          onAction={async () => {
            try {
              await Clipboard.paste(svgOf(icon, style));
            } catch (error) {
              await showFailureToast(error, { title: "Could not paste the SVG" });
            }
          }}
        />
      </ActionPanel.Section>
      <ActionPanel.Section title="Code">
        <Action.CopyToClipboard
          title="Copy React JSX"
          content={reactJsx(icon, style)}
          icon={Icon.Code}
          shortcut={shortcut("j")}
        />
        <Action.CopyToClipboard
          title="Copy React Import"
          content={reactImport(icon)}
          icon={Icon.Download}
          shortcut={shortcut("i")}
        />
        <Action.CopyToClipboard
          title="Copy Vue Snippet"
          content={vueSnippet(icon, style)}
          icon={Icon.CodeBlock}
          shortcut={shortcut("u")}
        />
        <Action.CopyToClipboard
          title="Copy Svelte Snippet"
          content={svelteSnippet(icon, style)}
          icon={Icon.Terminal}
          shortcut={shortcut("s", true)}
        />
      </ActionPanel.Section>
      <ActionPanel.Section>
        <Action.CopyToClipboard
          title="Copy Name"
          content={icon.name}
          icon={Icon.Tag}
          shortcut={Keyboard.Shortcut.Common.CopyName}
        />
        <Action.OpenInBrowser
          title="Open Icon Page"
          url={pageOf(icon)}
          icon={Icon.Globe}
          shortcut={Keyboard.Shortcut.Common.Open}
        />
      </ActionPanel.Section>
    </ActionPanel>
  );
}

export default function SearchIcons() {
  const { icons } = useMemo(loadIcons, []);
  const [style, setStyle] = useState<Style>("outline");

  // the icons by category, in the order the set lists them
  const sections = useMemo(() => {
    const byCategory = new Map<string, KineticIcon[]>();
    for (const icon of icons) {
      const list = byCategory.get(icon.category);
      if (list) list.push(icon);
      else byCategory.set(icon.category, [icon]);
    }
    return [...byCategory];
  }, [icons]);

  const previews = useMemo(() => new Map(icons.map((icon) => [icon.name, previewOf(icon, style)])), [icons, style]);

  return (
    <Grid
      columns={8}
      inset={Grid.Inset.Large}
      searchBarPlaceholder={`Search ${icons.length.toLocaleString("en-US")} icons by name or tag`}
      searchBarAccessory={
        <Grid.Dropdown tooltip="Icon Style" storeValue onChange={(value) => setStyle(value as Style)}>
          {STYLES.map((s) => (
            <Grid.Dropdown.Item key={s} title={capitalize(s)} value={s} />
          ))}
        </Grid.Dropdown>
      }
    >
      {sections.map(([category, list]) => (
        <Grid.Section key={category} title={capitalize(category)} subtitle={String(list.length)}>
          {list.map((icon) => (
            <Grid.Item
              key={icon.name}
              id={icon.name}
              title={icon.name}
              keywords={[icon.title, componentOf(icon.name), icon.category, ...icon.tags]}
              content={{
                value: { source: previews.get(icon.name) ?? "", tintColor: Color.PrimaryText },
                tooltip: `${icon.title}: ${icon.motion}`,
              }}
              actions={<IconActions icon={icon} style={styleOf(icon, style)} />}
            />
          ))}
        </Grid.Section>
      ))}
    </Grid>
  );
}
