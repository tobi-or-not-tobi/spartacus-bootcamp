<template>
  <div>
    <input v-model="query" placeholder="Search..." />
    <button v-on:click="search">Search {{ query }}</button>
    <ul>
      <li
        v-for="result in results"
        :key="result.value"
        v-on:click="search(result.value)"
      >
        {{ result.value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      data: "",
      query: "",
      results: []
    };
  },
  mounted: function() {
    this.cxApi = this.$root.$options.customElement.cxApi || {};
    this.subscription = this.cxApi.searchbox
      .getSuggestionResults()
      .subscribe(results => {
        this.results = results;
      });
  },
  watch: {
    query: function(val) {
      this.cxApi.searchbox.searchSuggestions(val, {});
    }
  },
  destroyed: function() {
    this.subscription.unsubscribe();
  },
  deactivated: function() {
    this.$destroy();
  },
  methods: {
    search: function(query) {
      query = query || this.query;
      this.cxApi.ngZone.run(() => {
        this.cxApi.routing.go({ cxRoute: "search", params: { query } });
      });
    }
  }
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
  color: #42b983;
  font-size: 0.8rem;
  cursor: pointer;
}
</style>
