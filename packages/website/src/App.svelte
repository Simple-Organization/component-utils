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
      <div class="md__wrapper">
        <div use:setupCodeblocks={text} id="ProseMirror" />
      </div>
    {/await}
  {/await}
</div>

<style>
  .md__wrapper {
    grid-column: 2 / span 3;
    height: 100vh;
    overflow-y: scroll;
  }
  #page__wrapper {
    height: 100vh;
    display: grid;
    grid-auto-columns: 15rem auto;
    gap: 2rem;
  }
  .page__sidebar {
    grid-column: 0 / 1;
  }
</style>
