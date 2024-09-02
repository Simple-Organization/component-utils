<script>
  import { topRoutes } from '../../router';
</script>

<div>
  <span>Components</span>
  {#each Object.keys(topRoutes) as route}    
    <a href="{route}">{route}</a>
  {/each}
</div>

<style>
  span {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  div {
    position: sticky;
    top: 0;

    display: flex;
    flex-direction: column;
    width: 10rem;
    padding: 1rem;
    gap: 0.5rem;

    background: var(--mantle);
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
