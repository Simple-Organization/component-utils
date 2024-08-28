import { glheraRouter, matchPath } from 'glhera-router';

export const router = glheraRouter({
  url: location.href,
});

router.subWinPopState();
