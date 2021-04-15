<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/childone">子页面1</router-link>
    <router-link to="/about/childtwo">子页面2</router-link>
   <router-view/>
  </div>
  
</template>


<script>
export default {

  // 可以在组件里面写路由守卫 跟在index 写是一样的
  beforeRouteEnter(to,from,next){
    console.log(to,from,next);
    next()
  },
  beforeRouteLeave(to,from,next){
    console.log(to,from,next);
      next()
  }
}
</script>