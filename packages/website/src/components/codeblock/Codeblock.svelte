<script lang="ts">
  import hljs from 'highlight.js';

  // import hljs from 'highlight.js';

  export let src: string;
  console.log(src);
</script>

<pre>
	{#await fetch(src) then t}
    {#await t.text() then text}
      {@html hljs.highlight(text, { language: 'javascript' }).value}
    {/await}
  {/await}	
</pre>

<style>
  pre {
    background: var(--mantle);
  }
</style>
