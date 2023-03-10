import { createApp } from 'vue'

import store  from './store/index.js'
import App from './App.vue'
import router from './router/index.js'

// import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
