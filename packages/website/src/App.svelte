<script lang="ts">
  import Sidebar from './components/sidebar/Sidebar.svelte';
  import { router, topRoutes } from './router';
  import { matchPath } from 'glhera-router';

  let component: any;

  router.pathname.subscribe((path) => (component = matchPath(path, topRoutes)));
</script>

<div id="page__wrapper">
  <Sidebar></Sidebar>

  <div>a
    <svelte:component this={component}></svelte:component>
  </div>
</div>

<style>
  #page__wrapper {
    height: 100vh;
    display: flex;
    color: aliceblue;
  }
</style>
