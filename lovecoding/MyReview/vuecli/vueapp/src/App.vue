<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/pageone">页面一</router-link> -->
      <router-link :to="{ name: 'PageOne', params: { username: '小名' } }"
        >页面一</router-link
      >
      |
      <router-link :to="{ name: 'PageTwo', query: { username: '小红' } }"
        >页面二</router-link
      >
      | <router-link to="/pagethree/小花">页面三</router-link> |
      <router-link to="/redirect/123">重定向</router-link> |
      <router-link to="/rename">别名</router-link> |
      <router-link to="/pagefour">页面四</router-link> |
      <router-link to="/pagefive">页面五</router-link> |
      <button @click="clickhandel">编程式导航</button>
    </div>
    <div class="fade-div">
      <!-- 相当于是CSS 过度的一个钩子 可以自己完成过渡效果 -->
      <transition name="fade">
      <keep-alive>
        <!--
           裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
           和 transition 相似，keep-alive 是一个抽象组件：它自身不会渲染成一个 DOM 元素，也不会出现在父组件链中。 
        -->
        <router-view />
      </keep-alive>

      </transition>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    clickhandel() {
      //编程式导航就是通过编程的方法进行跳转路由

      // this.$router.push('/about');

      // this.$router.push({
      //   name:'PageOne',
      //   params:{
      //     username:333
      //   }
      // })

      // this.$router.push({
      //   name: "PageTwo",
      //   query: {
      //     username: 333,
      //   },
      // });

      this.$router.replace({
        path: "/pagetwo",
        query: {
          username: "1212313",
        },
      });

      // replace这个只是重定向 不会进入历史管理

      // this.$router.go(-2)

      // this.$route   当前对象的东西
      // this.$router   所有的东西
    },
  },
};
</script>


<style>
.fade-div {
  position: relative;
}
/*进入时过度 */
.fade-enter {
  transform: translateX(100%);
}
.fade-enter-active {
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  width: 100%;
}
.fade-enter-to {
  transform: translateX(0);
}

/* 离开时过度 */

.fade-leave {
  transform: translateX(0);
}

.fade-leave-active {
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  width: 100%;
}

.fade-leave-to {
  transform: translateX(-100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
