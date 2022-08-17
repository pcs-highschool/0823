<template>
  <div id="header-menu">
    <router-link :to="{ name: 'home'}">Home</router-link>
    <router-link :to="{ name: 'users'}">users</router-link>
    <router-link :to="{ name: 'data'}">data</router-link>
    <router-link :to="{ name: 'memo'}">memo</router-link>
  </div>
</template>

<script>

export default {
}
</script>

<style>

    #header-menu{
        width: 100%;
        display: flex;
        flex-direction: row;

        border-bottom: 1px solid black;
    }

    #header-menu > a {
        width: 25%; 
        padding: 15px;
        margin: 30px;

        font-size: 20pt;
        text-decoration: none;
        color: black;

        background-color: rgb(181, 244, 244, 0.7);
        border-radius: 20px;
        text-align: center;
    }
    
</style>