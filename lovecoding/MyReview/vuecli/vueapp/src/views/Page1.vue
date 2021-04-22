<template>
    <div>
        <h1>{{ num }}</h1>
        <h1>这里是页面一</h1>
        <h1>{{ $route.params.username }}</h1>
        <button @click="add">add</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            num:1
        }
    },
    created(){
        // console.log(this.$route.params.username);
    },
    activated() {
        // 这个是 用 keep-live 时当进入这个页面的时候就会触发这个函数 但是除了首次外 不会触发created 了
        console.log("com");
    },
    deactivated() {
        // 这个是 用 keep-live 时离开的时候触发
        console.log("leave");
    },
    methods:{
        add(){
            ++this.num
        }
    }
}
</script>