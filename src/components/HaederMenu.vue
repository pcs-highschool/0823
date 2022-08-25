<template>
  <div id="header-menu">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <hr>
  </div>
</template>

<script>
export default {};
</script>

<style>
#header-menu {
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  padding: 5px 60px;
  box-shadow: 2px 2px 10px lightblue;

}

#header-menu > a {
  margin: 10px;

  font-size: 23px;
  font-weight: bold;
  transition: all 0.2s;
  position: relative;
}
#header-menu > a::before{
  position: absolute;
  content: "";
  width: 0;
  bottom: 0;
  height: 1px;
  transition: all 0.2s;
}
#header-menu > a:hover{
  transform: scale(1.2);
}
#header-menu > a:hover::before{
  width: 100%;
  background-color: black;
}
</style>