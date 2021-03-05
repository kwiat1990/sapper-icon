<script>
  export let icon = "";
  export let rotate = "";
  export let disableHover = false;

  $: elements = icon
    .replace(/<svg ([^>]*)>/, '')
    .replace('</svg>', '')

  $: console.log("ok", icon, elements);
</script>

<!-- class:transform={rotate !== ""}, -->
<!-- class="`icon rotate-${rotate}`" -->
<svg class:icon--has-hover={!disableHover}>
  {@html icon}
</svg>


<style>
  .icon {
    height: 1.5em;
    width: 1.5em;
    @apply inline-block;

    &--has-hover {
      @apply transition-transform duration-300;

      &:hover {
        @apply transform scale-110;
      }
    }
  }
</style>
