<script lang="ts">
  import { matchPath } from 'glhera-router';
  import { setupCodeblocks } from './lib/ce.ts';
  import { router, topRoutes } from './router';
  import Sidebar from './components/sidebar/Sidebar.svelte';
  import hljs from 'highlight.js';
  let component: any;

  router.pathname.subscribe((path) => (component = matchPath(path, topRoutes)));
</script>

<div id="page__wrapper">
  <div class="page__sidebar">
    <Sidebar />
  </div>
  {#await fetch('../README.md') then t}
    {#await t.text() then text}
      <div use:setupCodeblocks={text} id="ProseMirror" />
    {/await}
  {/await}

  <pre>
    
    {@html hljs.highlight(
      'let component: any;\n  let component: any;\n  let component: any;',
      { language: 'javascript' },
    ).value}
  </pre>
</div>

<style>
  #page__wrapper {
    height: 100vh;
    display: grid;
    grid-auto-columns: 12rem auto;
    gap: 2rem;
  }
  .page__sidebar {
    grid-column: 0 / 1;
  }
</style>
