import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions).use(Quasar, quasarUserOptions)
app.use(router)
app.use(store)
app.mount('#app')
