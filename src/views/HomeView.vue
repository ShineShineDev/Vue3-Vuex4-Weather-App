<template>
	
	<div class="container mt-5 p-4">
		<h3 class="text-center">Vue3 & Vuex4 Module Weather App</h3>
		<div class="mt-5">
			<div class="row">
				<div class="col col-md-4 offset-md-4 p-3 rounded-lg wp-card">
					<weatherComponent />
				</div>
			</div>
		</div>
	</div>
	
	<!-- <p class="alert alert-info">{{ this.$store.state.weather.key }}</p> -->
</template>
<script>
import headerComponent from '../components/headerComponent.vue'
import weatherComponent from '../components/weatherComponent.vue';
export default {
	components: { weatherComponent,headerComponent }
}
</script>

<style>
.wp-card {
	background-image: linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% );
	box-shadow: -1px 4px 19px 0px rgba(41, 26, 26, 0.48);
}
</style>


