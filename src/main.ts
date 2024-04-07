// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import axios from 'axios'

// axios.defaults.baseURL = 'http://127.0.0.1:8000'

// createApp(App).use(store).use(router).use(axios).mount('#app')



import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

axios.defaults.baseURL='http://127.0.0.1:8000/api/v1/'


const app = createApp(App);

// Use Vuex store
app.use(store);

// Use Vue Router
app.use(router);

// Set up Axios instance
app.config.globalProperties.$axios = axios;

app.mount('#app');
