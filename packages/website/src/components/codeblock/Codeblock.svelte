<script lang="ts">
  import hljs from 'highlight.js';

  // import hljs from 'highlight.js';

  export let src: string;
</script>

<pre>
	{#await fetch(src) then t}
    {#await t.text() then text}
      {@html hljs.highlightAuto(text).value}
    {/await}
  {/await}	
</pre>