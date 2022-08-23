<template>
  <header-menu />
	<div v-if="this.$list !== null">
		<router-view></router-view>
	</div>

	<div v-else>
		안떠요
	</div>
</template>

<script>	
import HeaderMenu from "./components/HaederMenu.vue";

export default {
  components: {
    HeaderMenu,
  },
  mounted() {
		let self = this;
		
		console.log(this.$usersData);

    this.$axios.get('https://jsonplaceholder.typicode.com/todos/')
		.then(function(response){
			if(response.status !== 200){
				console.log('error');
				self.$list = [];
			} else{
				self.$list = response.data;
				console.log(self.$list);
			}
		}).catch(function(){
			self.$list = [];
		});
  },
};
</script>

<style></style>