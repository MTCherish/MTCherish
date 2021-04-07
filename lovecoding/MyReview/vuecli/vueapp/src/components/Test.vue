<template>
    <div>
       
        <h1> {{msg}}</h1>
        你好世界
    </div>
</template>

<script>
export default {
    props:["msg"]
}
</script>

<style scoped>
    h1{
        color:  red;
    }
</style>
