<template>
    <div>
        <h1>{{$store.state.goods.ma}}</h1>
        <h1>这是页面四</h1>
        <!-- <h1>stroe:{{$store.state.count}}</h1> -->
        <h1>page4:{{count}}</h1>
        <h1>{{str}}</h1>
        <h1>{{sumi}}</h1>
        <h1>{{sum}}</h1>
        <!-- <button @click="$store.commit('add',{b:1})">add</button> -->
        <button @click="add">add</button>
        <button @click="reduceAction">reduce</button>
    </div>
</template>
<script>
import {mapState , mapMutations,mapActions,mapGetters} from 'vuex'
export default {
    data() {
        return {
            i:10
        }
    },
    methods: {
        ...mapMutations(['add']),
        ...mapActions(['reduceAction']),
        testHandle(){

        }
    },
    created() {
       
    },
    // computed:{
    //     // count(){
    //     //     return this.$store.state.count
    //     // }
    // }
    // computed:mapState({
    //     count:state => state.count,
    //     str:state => { 
    //         return state.str
    //     }
    // })
    // computed:mapState(['count','str'])
    computed:{
        ...mapState(['count','str']),
        ...mapGetters(['sum']),
        sumi(){
            return this.i
        }
    }
}
</script>