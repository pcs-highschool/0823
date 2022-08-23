<template>
	<div>
		<header-menu />
		<div v-if="userList === null" class="loader">
			<img
			width="70"
			src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif"
			/>
			<h4>데이터를 불러오는 중입니다.</h4>
		</div>

		<div v-else-if="userList.length < 1" class="loader">
			<h4> 
			<img width="40" src="https://cdn-icons-png.flaticon.com/512/179/179386.png?w=360" />
				유저가 발견되지 않았습니다.
			</h4>
		</div>

		<div v-else>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>	
import HeaderMenu from "./components/HaederMenu.vue";

export default {
	data(){
		return {
			userList : null,
		}
	},
  components: {
    HeaderMenu,
  },
  mounted() {
	let self = this;
	setTimeout(function(){
	self.$axios.get('https://jsonplaceholder.typicode.com/todos/')
		.then(function(response){
			if(response.status !== 200){
				console.log('error');
				self.$list = [];
			} else{
				self.$list = response.data;
				console.log(self.$list);
			}
			self.userList = self.$list;
		}).catch(function(){
			self.$list = [];
		});
	},500);
  },
};
</script>

<style></style>