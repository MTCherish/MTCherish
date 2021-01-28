<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     <button @click="clickHandle1">button1</button>
    <button @click="clickHandle2">button2</button>
    <button @click="clickHandle3">button3</button>
    <component :is='com'></component>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Test from "@/components/Test.vue"
import Test2 from "@/components/Test2.vue"
export default {
  data(){
    return{
      com:HelloWorld
    }
  },
  name: 'Home',
  components: {
    HelloWorld,
    Test,
    Test2
  },
  methods:{
     clickHandle1(){
      this.com= HelloWorld
    },
    clickHandle2(){
      this.com= Test
    },
    clickHandle3(){
      this.com= Test2
    }
  }
}
</script>
