<script>
  import { onMount, onDestroy } from "svelte";

  export let cxApi;
  let queryString = "";
  let results = [];
  let subscription;

  onMount(() => {
    setTimeout(() => {
      if (cxApi) {
        subscription = cxApi.searchbox.getSuggestionResults().subscribe(res => {
          results = res;
        });
      }
    });
  });

  onDestroy(() => {
    // This doesn't work currently, take a look at: https://github.com/sveltejs/svelte/issues/1152
    if (subscription) {
      subscription.unsubscribe();
    }
  });

  function search(query) {
    query = typeof query === "string" ? query : queryString;
    cxApi.routing.go({ cxRoute: "search", params: { query } });
  }

  function suggestionSearch(query) {
    if (cxApi) {
      cxApi.searchbox.searchSuggestions(query, {});
    }
  }

  $: suggestionSearch(queryString);
</script>

<svelte:options tag="svelte-search" />
<input bind:value={queryString} placeholder="Search..." />
<button on:click={search}>Search {queryString}</button>
<ul>
  {#each results as { value }}
    <li on:click={() => search(value)}>{value}</li>
  {/each}
</ul>

<style>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    color: red;
    font-size: 0.8rem;
    cursor: pointer;
  }
</style>
