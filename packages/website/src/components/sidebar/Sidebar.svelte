<script>
  import { topRoutes } from '../../router';
</script>

<div>
  <span>Components</span>
  {#each Object.keys(topRoutes) as route}
    <a href={route}>{route}</a>
  {/each}
</div>

<style>
  span {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
    gap: 0.5rem;
    height: 100vh;

    border-right: 2px solid var(--surface-0);
  }

  a {
    text-decoration: none;
    color: var(--rosewater);
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;

    &:hover {
      background: var(--surface-0);
    }
  }
</style>
