<script lang="ts">
  import hljs from 'highlight.js';

  export let src: string;

  async function getHljs(src: string) {
    import(/* @vite-ignore */ '/' + src + '?raw');
  }
</script>

<div>
  <pre>{#await import(/* @vite-ignore */ '/' + src + '?raw') then t}{@html hljs.highlightAuto(
        t.default,
      ).value}{/await}</pre>
  <button class="m-icon"></button>
</div>

<style>
  div {
    position: relative;
    max-width: 50rem;
  }

  .m-icon {
    position: absolute;
    top: 1rem;
    right: 1rem;

    appearance: none;
    background: var(--surface-0);
    color: var(--subtext-0);
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;

    cursor: pointer;
  }
</style>
