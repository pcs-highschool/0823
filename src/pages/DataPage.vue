<template>
  <div class="filter_box">
    <div :class="{'clickedDiv' : clickedButton === 'all'}" @click="filterFunc('all')">전체</div>
    <div :class="{'clickedDiv' : clickedButton === 'writting'}" @click="filterFunc('writting')">작성중</div>
    <div :class="{'clickedDiv' : clickedButton === 'complete'}" @click="filterFunc('complete')">완료</div>
  </div>

  <div v-if="filteredDataList.length < 1" class="loader">
    <h4>
      <img
        width="40"
        src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360"
      />
      유저가 발견되지 않았습니다.
    </h4>
  </div>

  <div v-else>
    <!-- <input type="text" v-model="searchKeyword" /> -->
    <create-list
      :linkName="'memo'"
      :dataList="filteredDataList"
      :className="'titleList'"
    />
  </div>
</template>

<script>
import CreateList from "../components/CreateList.vue";

export default {
  components: {
    CreateList,
  },

  data() {
    return {
      filteredDataList: [],
      clickedButton: String,
    };
  },

  methods: {
    filterFunc: function (filterStandard) {
      this.filteredDataList = [];

      if (filterStandard === "all") {
        this.filteredDataList = this.filteredData;
        this.clickedButton = "all";
      } else if (filterStandard === "writting") {
        this.filteredData.filter((user) => {
          if (user.completed === false) {
            this.filteredDataList.push(user);
          }
        });
        this.clickedButton = "writting";
      } else if (filterStandard === "complete") {
        this.filteredData.filter((user) => {
          if (user.completed === true) {
            this.filteredDataList.push(user);
          }
        });
        this.clickedButton = "complete";
      }
    },
  },

  computed: {
    filteredData() {
      return this.$usersData.filter((user) => {
        if (user.userId === Number(this.$route.params.userId)) {
          return user;
        }
      });
    },
  },

  mounted() {
    this.filteredDataList = this.filteredData;
    this.clickedButton = "all";
  },
};
</script>

<style>
h4 {
  display: flex;
  justify-content: center;
  align-items: center;
}
h4 > img {
  margin-right: 10px;
}
.filter_box {
  text-align: center;
}

.filter_box > * {
  display: inline-block;

  margin: 0px 10px;
  padding: 10px;

  border: 2px solid plum;
  border-radius: 30px;
  box-sizing: border-box;

  cursor: pointer;
}

.clickedDiv{
  background-color: rgb(110, 239, 244);
}

</style>