<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="clickhandel1">click1</button>
    <button @click="clickhandel2">click2</button>
    <button @click="clickhandel3">click3</button>
    <component :is='com'></component>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Test from "@/components/Test.vue";
import Test2 from "@/components/Test2.vue";

export default {
  data() {
    return {
      com: HelloWorld,
    };
  },
  methods: {
    clickhandel1() {
      this.com = HelloWorld;
    },
    clickhandel2() {
      this.com = Test;

    },
    clickhandel3() {
      this.com = Test2;
    },
  },
  name: "Home",
  components: {
    HelloWorld,
    Test,
    Test2,
  },
};
</script>
