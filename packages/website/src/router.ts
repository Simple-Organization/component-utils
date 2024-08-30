import { glheraRouter, matchPath } from 'glhera-router';
import NavSideBar from '../../components/src/navsidebar/component.svelte';
import Tooltip from '../../components/src/tooltip/component.svelte';

export const topRoutes = {
  '/sidebar': NavSideBar,
  '/tooltip': Tooltip,
};

export const router = glheraRouter({
  url: location.href,
});

router.subWinPopState();
