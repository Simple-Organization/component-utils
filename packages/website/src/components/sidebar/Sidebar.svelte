<script>
</script>

<div>
  <span>Components</span>
  <a href="/sidebar">sidebar</a>
  <a href="/tooltip">tooltip</a>
</div>

<style>
  span {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  
  div {
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
    border-radius: .5rem;

    &:hover {
      background: var(--surface-0);
    }
  }
</style>
