<template>
    <div>
        <h1>这里是页面一{{num}}</h1>
        <h1>用户名：{{$route.params.username}}</h1>
        <button @click="addHandle">add</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            num:1
        }
    },
    created() {
        console.log(this.$route);
    },  
    activated() {
        console.log("com");
    },
    deactivated() {
        console.log("leave");
    },
    methods: {
       addHandle(){
           ++this.num
       }
    },  

}
</script>