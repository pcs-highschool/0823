<template>
  <div v-if="usersDataList === null" class="loader">
    <img width="70" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif" />
    <h4>데이터를 불러오는 중입니다.</h4>
  </div>
  <div v-else-if="usersDataList.length < 1" class="loader">
    <h4>
      <img
        width="40"
        src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360"
      />
      유저가 발견되지 않았습니다.
    </h4>
  </div>

  <div v-else>
    <create-list :dataList="usersDataList" :className="'users'" :linkName="'data'" />
  </div>

  <input type="button" @click="fetchData()" value="새로고침" />
  
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
    fetchData: function() {
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
  },

  mounted() {
    
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