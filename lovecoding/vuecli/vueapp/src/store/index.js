import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state:{
    ma:1123
  },
  mutations:{
    mAdd(state){
      state.ma += 5
    }
  }
}

export default new Vuex.Store({
  state: {
    count:1,
    str:"hello world"
  },
  mutations: {
    add(state,payload){
      console.log(payload);
      state.count += 1;
    },
    reduce(state){
      state.count --;
    }
  },
  actions: {
    reduceAction(context,payload){
      context.commit('reduce',payload)
    }
  },
  getters:{
    sum(state){
      return state.count  + 10
    }
  },
  modules: {
    goods:moduleA
  }
})
