<svelte:options namespace="svg" />

<script lang="ts">
  import type { SvgNode } from "@kineticons/core";
  import Self from "./Node.svelte";

  let { node }: { node: SvgNode } = $props();
  const attrs = $derived(Object.fromEntries(Object.entries(node.attrs).filter(([, v]) => v !== undefined)));
</script>

<svelte:element this={node.tag} {...attrs}>{#if node.text != null}{node.text}{:else if node.children}{#each node.children as child}<Self node={child} />{/each}{/if}</svelte:element>
