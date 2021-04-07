<template>
    <div>
        <h1>{{ num }}</h1>
        <h1>这里是页面三</h1>
        <h1>{{ $route.params.username }}</h1>
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
        console.log(this.$route.params.username);
    }
}
</script>