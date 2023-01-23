import axios from 'axios';
import {GETWEATHERDATABYCITY} from './mutation.js'
export default  {
    state(){
        return {
            weatherDatas : null,
            loading: true,
			errored: false
        }
    },
    getters : {
        getWeatherDatas(state){
            return state.weatherDatas;
        },
        loading(state){
            return state.loading
        },
        errored(state){
            return state.errored;
        }
    },
    actions : {
        getWeatherDataByCity({commit},city){
            // console.log("make api with " , city);
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=32e548183e5d44dc9c42a2e383965d19&units=metric`)
			.then(response => { commit('GETWEATHERDATABYCITY',response.data) })
			.catch(error => { this.errored = true })
			.finally(() => this.loading = false);
        }
    },
    mutations : {
        [GETWEATHERDATABYCITY](state,payload){
            // console.log(payload)
            state.weatherDatas = payload;
        }

    }
}