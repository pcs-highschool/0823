<template>
  <div v-for="(val, idx) in dataList" :key="idx" :class="className">
    <router-link
      :to="{ name: linkName, params: { titleId: val.id, userId: val.userId } }"
    >
      <div v-if="className === 'users'">{{ val.userId }}</div>
      <div v-else-if="className === 'titleList'">TITLE : {{ val.title }}</div>
      <div v-else-if="className === 'memo'">
        <div class="title">title : {{ val.title }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    dataList: Array,
    className: String,
    linkName: String,
  },
};
</script>

<style>
.users {
  height: 150px;
  display: inline-block;

  list-style: none;

  width: 20%;

  margin: 2.5%;

  text-align: center;

  border: 2px solid aquamarine;
  border-radius: 20px;

  box-sizing: border-box;

  cursor: pointer;
}

.titleList {
  display: block;

  border: 2px solid aquamarine;
  border-radius: 20px;

  margin: 40px;
  padding: 20px;
}

.users > a {
  display: block;

  width: 100%;
  height: 100%;

  font-size: 50px;

  line-height: 140px;
}
</style>