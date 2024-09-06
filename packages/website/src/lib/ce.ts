import { marked, type MarkedExtension, type Token, type TokenizerObject, type TokensList } from 'marked';
import Codeblock from '../components/codeblock/Codeblock.svelte';

let codeblocks: any[] = [];

export const svelteCode = {
  name: 'svelteCode',
  level: 'block',
  start(src: string) { return src.match(/ /)?.index },
  tokenizer(src: string, tokens: TokensList) {
    const match = /^@svelte\s+(\S+)/.exec(src);

    if (match) {
      codeblocks.push({ src: match[1], lang: match[0] });
      const token = {
        // Token to generate
        type: 'svelteCode', // Should match "name" above
        raw: match[0], // Text to consume from the source
        src: match[1], // Additional custom properties
        tokens: [], // Array where child inline tokens will be generated
      };

      return token;
    }
    return false
  },
  renderer(token: Token | any) {
    return `<code id="${token.src}"></code>`; // parseInline to turn child tokens into HTML
  },
};


export function setupCodeblocks(node: HTMLElement, md: string) {
  node.innerHTML = marked.parse(md) as string;

  codeblocks.forEach((block) => {
    new Codeblock({
      target: document.getElementById(block.src) as HTMLElement,
      props: { src: block.src },
    });
  });
}

marked.use({ extensions: [svelteCode] });
