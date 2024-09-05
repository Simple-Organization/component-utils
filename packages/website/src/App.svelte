<script lang="ts">
  import hljs from 'highlight.js';
  import markdown from 'highlight.js/lib/languages/markdown';
  import typescript from 'highlight.js/lib/languages/typescript';
  import javascript from 'highlight.js/lib/languages/javascript';
  import Sidebar from './components/sidebar/Sidebar.svelte';
  import { router, topRoutes } from './router';
  import { matchPath } from 'glhera-router';
  import { marked, type RendererObject } from 'marked';

  // Then register the languages you need
  hljs.registerLanguage('markdown', markdown);
  hljs.registerLanguage('typescript', typescript);
  hljs.registerLanguage('javascript', javascript);

  let text = '';
  let component: any;
  let tree: any = '';
  fetch('./README.md')
    .then((r) => r.text())
    .then((t) => {
      text = t;
      tree = hljs.highlight(
        `
          let texta: any = '';
          let component: any;
          let tree: any = '';
        `,
        { language: 'typescript' },
      );
    });

  router.pathname.subscribe((path) => (component = matchPath(path, topRoutes)));

  const codeRenderer: RendererObject = {
    table(token) {
      const text2 = this.parser.parseInline(token);
      const escapedText = text2
        .toLowerCase()
        .replace(/(?<!\w)@svelte(?!\w)/g, '-');

      return `
            <h1>
              ${text2}
            </h1>`;
    },
  };

  marked.use({ renderer: codeRenderer });
</script>

<div id="page__wrapper">
  <div class="page__sidebar">
    <Sidebar />
  </div>
  <code class="ProseMirror">
    <pre>
      {@html tree.value}
    </pre>
    {@html marked.parse(text)}
    {@html marked.parse('@svelte teste')}
  </code>
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
