<template>
  <create-list :dataList="usersDataList" :className="'users'" :linkName="'data'" />
  <button @click="showData()"></button>
</template>

<script>
import CreateList from "../components/CreateList.vue";

export default {
  components: {
    CreateList,
  },

  data() {
    return {
      usersId: null,
			usersDataList: null,
    };
  },

  methods: {
    fetchData: function () {
      this.usersId = [];
			this.usersDataList = [];
      this.$usersData.filter((user) => {
        let user_id = user.userId;

        if (this.usersId.indexOf(user_id) === -1) {
          this.usersId.push(user_id);
					this.usersDataList.push(user);
        }
      });
    },

    showData: function(){
      console.log(this.$usersData);
    }
  },

  mounted() {
    this.usersDataList = this.$usersData;
    console.log(this.$usersData);
	},

  // computed:{
  //     filteredUsers(){
  //         return this.$usersData.filter(
  //             (user) => {
  //                 return user.userId.includes
  //             }
  //         )
  //     }
  // }
};
</script>

<style>
* {
  color: black;
  text-decoration: none;
}

body {
  background-color: azure;
}

.loader {
  text-align: center;
  padding: 40px 0;
  border: 2px solid aquamarine;
  border-radius: 10px;
  margin: 50px;
}

.getButton {
  display: inline-block;

  border: 2px solid aquamarine;
  margin-left: 50px;
  padding: 5px;
  border-radius: 20px;

  cursor: pointer;
}


</style>