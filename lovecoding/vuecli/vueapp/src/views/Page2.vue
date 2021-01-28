<template>
  <div>
    <h1>页面2</h1>
    <h1>getters:{{ $store.getters.sum }}</h1>
    <h1>{{ $store.state.count }}</h1>
    <button @click="addHandle">add</button>
    <button @click="reduceHandle">reduce</button>
    <h1>{{ $route.query.username }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  created() {
    console.log(this.$route.query.username);
    console.log(this.$store.state.count);
  },
  methods: {
    addHandle() {
      // ++this.$store.state.count
      this.$store.commit("add", { a: 1, b: 2 });
    },
    reduceHandle() {
      this.$store.dispatch("reduceAction", 2);
    },
  },
});
</script>