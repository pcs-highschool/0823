<template>
  
  <header-menu />
  <router-view></router-view>
  
</template>

<script>
import HeaderMenu from "./components/HaederMenu.vue";
export default {
  components:{
    HeaderMenu
  }
};
</script>

<style></style>