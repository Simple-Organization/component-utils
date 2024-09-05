
import markdown from 'highlight.js/lib/languages/markdown';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import hljs from 'highlight.js';
import { marked } from 'marked'

hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);

const svelteCode = {
  name: 'svelteCode',
  level: 'block',                                     // Is this a block-level or inline-level tokenizer?
  start(src) { return src.match(/:[^:\n]/)?.index; }, // Hint to Marked.js to stop and check for a match
  tokenizer(src, tokens) {
    const rule = /(?<!\w)@svelte(?!\w)/;    // Regex for the complete token, anchor to string start
    const match = rule.exec(src);
    
    if (match) {
      const token = {                                 // Token to generate
        type: 'svelteCode',                      // Should match "name" above
        raw: match[0],                                // Text to consume from the source
        text: match[0].trim(),                        // Additional custom properties
        tokens: []                                    // Array where child inline tokens will be generated
      };
      this.lexer.inline(token.text, token.tokens);    // Queue this data to be processed for inline tokens
      return token;
    }
  },
  renderer(token) {    
    return `<h1>${this.parser.parseInline(token.tokens)}\n</h1>`; // parseInline to turn child tokens into HTML
  }
};

function walkTokens(token) {                        // Post-processing on the completed token tree
  if (token.type === 'strong') {
    token.text += ' walked';
    token.tokens = this.Lexer.lexInline(token.text)
  }
}
marked.use({ extensions: [svelteCode] });

console.log(marked.parse('@svelte src/test @'));

const text = "@svela testando outra coisa @";
const regex = /(?<!\w)@svelte(?!\w)|[^@\s]+|@/g;
const matches = text.match(regex);

console.log(matches); // Output: ['@svelte', 'src/test', '@']