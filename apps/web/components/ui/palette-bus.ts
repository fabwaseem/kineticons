// Opens the icon search from anywhere (the nav, a hero button, the keyboard) without a shared context.
const listeners = new Set<() => void>();
export const openPalette = () => listeners.forEach((l) => l());
export const onOpenPalette = (l: () => void) => {
  listeners.add(l);
  return () => void listeners.delete(l);
};
