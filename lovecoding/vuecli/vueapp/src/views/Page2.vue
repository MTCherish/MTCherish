<template>
    <div>
        <h1>页面2</h1>
        <h1>{{$route.query.username}}</h1>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data(){
            return {

            }
        }
        ,
        created(){
            console.log(this.$route.query.username);
            
        }
    })
</script>