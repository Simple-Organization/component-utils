<script lang="ts">
  import { matchPath } from 'glhera-router';
  import { setupCodeblocks } from './lib/ce.ts';
  import { router, topRoutes } from './router';
  import Sidebar from './components/sidebar/Sidebar.svelte';
  let component: any;

  router.pathname.subscribe((path) => (component = matchPath(path, topRoutes)));
</script>

<div id="page__wrapper">
  <div class="page__sidebar">
    <Sidebar />
  </div>
  {#await fetch('../README.md') then t}
    {#await t.text() then text}
      <code use:setupCodeblocks={text} id="ProseMirror"></code>
    {/await}
  {/await}
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
  #ProseMirror {
    padding: 3rem 0;
    width: 100%;
    grid-column: 2 / span 3;
  }
  pre {
    background: var(--base);
    width: min-content;
    padding: 2rem;
  }
</style>
