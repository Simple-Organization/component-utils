import { marked } from 'marked';
import Codeblock from '../components/codeblock/Codeblock.svelte';

let codeblocks: any[] = [];

export const svelteCode = {
  name: 'svelteCode',
  level: 'block',
  start(src) {
    return src.match(/(?<!\w)@svelte(?!\w)/)?.index;
  }, // Hint to Marked.js to stop and check for a match
  tokenizer(src, tokens) {
    const match = /@svelte\s+(\S+)/.exec(src);

    if (match) {
      codeblocks.push({ src: match[1].trim(), lang: match[0].trim() });
      const token = {
        // Token to generate
        type: 'svelteCode', // Should match "name" above
        raw: match[0], // Text to consume from the source
        lang: match[0].trim(), // Additional custom properties
        src: match[1].trim(), // Additional custom properties
        tokens: [], // Array where child inline tokens will be generated
      };
      return token;
    }
  },
  renderer(token) {
    return `<div id="${token.src}"></div>`; // parseInline to turn child tokens into HTML
  },
};

marked.use({ extensions: [svelteCode] });

export function setupCodeblocks(node: HTMLElement, md: string) {
  node.innerHTML = marked.parse(md) as string;
  
  codeblocks.forEach((element) => {
    new Codeblock({
      target: document.getElementById(element.src) as HTMLElement,
      props: { src: element.src },
    });
  });
}
