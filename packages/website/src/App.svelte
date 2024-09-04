<script lang="ts">
  import Sidebar from './components/sidebar/Sidebar.svelte';
  import { router, topRoutes } from './router';
  import { matchPath } from 'glhera-router';
  import { marked } from 'marked';
  import { all, common, createLowlight } from 'lowlight';
  import hljs from 'highlight.js';
  import markdown from 'highlight.js/lib/languages/markdown';
  import typescript from 'highlight.js/lib/languages/typescript';
  import javascript from 'highlight.js/lib/languages/javascript';


  // Then register the languages you need
  hljs.registerLanguage('markdown', markdown);
  hljs.registerLanguage('typescript', typescript);
  hljs.registerLanguage('javascript', javascript);

  let text = '';
  let component: any;
  let tree: any = '';
  fetch('src/components/mdviewer/test.md')
    .then((r) => r.text())
    .then((t) => {
      text = t;

      tree = hljs.highlight(
        `
  let texta: any = '';
  let component: any;
  let tree: any = '';
  
  fetch('src/components/mdviewer/test.md')
    .then((r) => r.text())
    .then((t) => {
      text = t;

      tree = hljs.highlight(
        text,
        { language: 'markdown' },
      );
      return <div onclick={() => 'asdasdsdasd'}>
              <a href="asdasd">
                b
              </a>
             </div>
    });`,
        { language: 'typescript' },
      );
    });

  router.pathname.subscribe((path) => (component = matchPath(path, topRoutes)));
  
</script>

<div id="page__wrapper">
  <div class="page__sidebar">
    <Sidebar />
  </div>
  <code class="ProseMirror">
    {@html marked.parse(text)}
    <pre>
      {@html tree.value}
    </pre>
  </code>
</div>

<div onclick={() => 'asdasdsdasd'}>
  <a href="asdasd">
    a
  </a>
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
  .ProseMirror {
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
