import {createStore} from 'vuex';
import weather from './store/weather'
const store = createStore({
    modules : {weather}
})
export default store;