import App from './App.svelte';
import NavSideBar from '../../components/src/navsidebar/component.svelte';
import markdown from 'highlight.js/lib/languages/markdown';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import hljs from 'highlight.js';

hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);

const app = new (App as any)({
  target: document.getElementById('app'),
});

export default app;

const topRoutes = {
  '/': NavSideBar,
};
