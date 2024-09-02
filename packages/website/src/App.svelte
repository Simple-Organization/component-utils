<script lang="ts">
  import Sidebar from './components/sidebar/Sidebar.svelte';
  import { router, topRoutes } from './router';
  import { matchPath } from 'glhera-router';
  import { marked } from 'marked';

  let text = ""
  let component: any;
  fetch('src/components/mdviewer/test.txt')
   .then( r => r.text() )
   .then( t => text = t )

  router.pathname.subscribe((path) => (component = matchPath(path, topRoutes)));
</script>

<div id="page__wrapper">
  <Sidebar/>

  <div class="ProseMirror">
    {@html marked.parse(text)}
  </div>
</div>

<style>
  #page__wrapper {
    height: 100vh;
    display: flex;
  }
  .ProseMirror {
    padding: 3rem;
  }
</style>
