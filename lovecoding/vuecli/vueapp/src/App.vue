<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <!-- <router-link to="/pageone">页面1</router-link> -->

      <router-link :to="{name:'PageOne',params:{username:'小马'}}">页面1</router-link> |
      <router-link :to="{name:'PageTwo',query:{username:'小马1'}}">页面2</router-link> |
      <router-link to="/pagethree/小马2">页面3</router-link> |
      <router-link to="/redir/小马2">重定向</router-link> |
      <router-link to="/pt">别名</router-link> |
       <router-link to="/pagefour">页面四</router-link> |
       <router-link to="/pagefive">页面五</router-link> |
      <button @click="goHandle">编程式导航</button>
    </div>
    <div class="box">
      <!-- <transition name="fade"> -->
        <keep-alive>
        <router-view/>
        </keep-alive>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      goHandle(){
        // this.$router.push("/about");

        // this.$router.push({
        //   name:"PageOne",
        //   params:{
        //     username:"aaaa"
        //   }
        // })

        // this.$router.push({
        //   path:"pagetwo",
        //   query:{
        //     username:"bbbbbb"
        //   }
        // })


        this.$router.replace({
          path:"/pagetwo",
          query:{
            username:"1212313"
          }
        })

        // 这个只是重定向 不会进入历史管理

        // this.$router.go(-2)
      
      // this.$route   当前对象的东西
      // this.$router   所有的东西

      }
    }
  }
</script>

<style>

.box{
  position: relative;
}

.fade-enter{
  transform: translateX(100%);
}
.fade-enter-active{
  transition: all 1s ease;
  position: absolute;
  top:0;
  width: 100%;
}
.fade-enter-to{
  transform: translateX(0);
}


.fade-leave{
  transform: translateX(0);
}

.fade-leave-active{
  transition: all 1s ease;
  position: absolute;
  top:0;
  width: 100%;
}

.fade-leave-to{
  transform:translateX(-100%);
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
