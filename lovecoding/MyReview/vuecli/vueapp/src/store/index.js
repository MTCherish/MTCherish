import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA ={
  state:{
    ma : 123
  },
  mutations:{
    madd(state){
      state.ma ++;
    }
  }
}

export default new Vuex.Store({
  state: {
    count:1,
    str:"hello world"
  },
  mutations: {
    // mutations 里面写的是同步 修改state 里面东西的函数
    add(state,payload){
      state.count += payload.num;
    },
    reduce(state){
      state.count --;

    }
  },
  actions: {
    // actions 写的是 有异步任务时候 要等待完成后 在调用 mutations里面的东西

    reduceAction(context,payload){
      // console.log(context);
      //  第一个参数 是一个 store 对象
      context.commit('reduce',payload);
    }
  },
  getters:{
    // getters 像是 computed 一样 可以做一些运算 返回数据相当于是在 state 里面的 会根据数据变自己变动
    sum(state){
      return state.count + "  " + state.str;
    }
  },
  modules: {
    // 模块化 可以引入外部的模块 这里是在本页面引了 一个 
    moduleA
  }
})
