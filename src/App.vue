<template>
  <div>
    <header-menu />
{{getData()}}
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderMenu from "./components/HaederMenu.vue";
export default {
  data() {
    return {
      userList: null,
    };
  },
  components: {
    HeaderMenu,
  },

  methods: {
    getData: async function () {
      let self = this;
      this.userList = [];

      //setTimeout(function () {},100);
      self.$usersData = [];

      self.$axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then(function (response) {
          if (response.status !== 200) {
            console.log("error");
            self.$usersData = [];
            self.userList = [];
          } else {
            self.$usersData = response.data;
            self.userList = response.data;
            console.log(self.$usersData);
          }
          self.userList = self.$usersData;
        })
        .catch(function () {
          self.$usersData = [];
        });
    },
  },

  created() {},
};
</script>

<style></style>