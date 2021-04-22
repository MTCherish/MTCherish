<template>
    <div>
        <h1>{{ num }}</h1>
        <h1>这里是页面二</h1>
        <h1>getters:{{ $store.getters.sum }}</h1>
        <h1>store:{{ $store.state.count }}</h1>
        <button @click="add">add</button>
        <button @click="reduce">reduce</button>
        <h1>{{ $route.query.username }}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num:0
        }
    },
    created(){
        // console.log(this.$route.query.username);
    },
    methods:{
        add(){
            this.$store.commit("add",{num:10});
        },
        reduce(){
            this.$store.dispatch("reduceAction",3);
        }
    }    
}
</script>