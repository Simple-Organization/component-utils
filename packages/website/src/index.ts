import App from './App.svelte'
import { router } from "./router";

console.log('Hello, world!');

router.push('/arroz')


const app = new (App as any)({
  target: document.getElementById('app')
})

export default app