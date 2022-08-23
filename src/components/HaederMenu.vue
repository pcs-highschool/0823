<template>
  <div id="header-menu">
    <router-link :to="{ name: 'home' }">Home</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
#header-menu {
  width: 100%;
}

#header-menu > a {
  display: inline-block;
  width: 40%;
  padding: 15px;
  margin: 30px 30%;

  font-size: 20pt;
  color: white;

  background-color: rgb(181, 244, 244);
  border-radius: 20px;
  text-align: center;

  box-shadow: 3px 5px rgb(0, 217, 255);
}
</style>