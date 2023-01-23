<template>
    <form @submit.prevent="getWeatherData">
        <div class="form-group pt-3 ">
            <input type="text" v-focus @keydown.enter="getWeatherData" v-model="city"
                class="form-control  shadow-lg border-0 text-info" placeholder="Enter City" style="background-color:rgba(255, 255, 255, 0.1)">
        </div>
        <button type="submit" class="btn shadow-lg  border-0  text-info" style="background-color:rgba(255, 255, 255, 0.1)">Search</button><br />
        <div v-if="!loading">loading...</div>
        <div v-if="errored == true">error...</div>
        <div v-if="getWeatherDatas != null" class="mt-4">
            <h3 class="text-center text-info">{{ getWeatherDatas.name }} | {{ getWeatherDatas.sys.country }}<br /></h3>
            <div class="d-flex justify-content-center mt-5">
                <div v-if="getWeatherDatas.weather[0].main == 'Clear'">
                    <img height="100" src="../assets/clear.png" alt="no found" />
                </div>
                <div v-else-if="getWeatherDatas.weather[0].main == 'Clouds'">
                    <img height="100" src="../assets/clouds.png" alt="no found" />
                </div>
                <div v-else-if="getWeatherDatas.weather[0].main == 'Rain'">
                    <img height="100" src="../assets/rainfall.png" alt="no found" />
                </div>
                <div v-else-if="getWeatherDatas.weather[0].main == 'Thunderstorm'">
                    <img height="100" src="../assets/storm.png" alt="no found" />
                </div>
                <div v-else-if="getWeatherDatas.weather[0].main == 'Haze'">
                    <img height="100" src="../assets/foggy.png" alt="no found" />
                </div>
                <div v-else>
                    <img height="100" src="../assets/foggy.png" alt="no found" />
                </div>
            </div>
            <div class="d-flex mt-5">
                <div class="mr-auto p-2  text-info">
                    <h3>{{ getWeatherDatas.weather[0].main }}</h3>
                </div>
                <div class="p-2  text-info">
                    <h3>{{ getWeatherDatas.main.temp }} 'C</h3>
                </div>
            </div>
        </div>
    </form>
    
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() { return { city: null } },
    computed: {
        ...mapGetters(['getWeatherDatas', 'loading', 'errored']),
    },
    methods: {
        getWeatherData() {
            // console.log('making api ...', this.city)
            this.$store.dispatch('getWeatherDataByCity', this.city);
        }
    },
    directives: {focus: {mounted: (el) => el.focus()},
	}
}
</script>
<style>
.bg-inherit {
    background-color: inherit;
}
</style>
