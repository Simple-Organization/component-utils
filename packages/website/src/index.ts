import App from './App.svelte'
import NavSideBar from '../../components/src/navsidebar/component.svelte';
import './ce.js'

const app = new (App as any)({
  target: document.getElementById('app')
})

export default app  

const topRoutes = {
  '/': NavSideBar,  
};
