import { createApp } from 'vue'

import urql from '@urql/vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import LayoutDashboard from './views/layouts/LayoutDashboard.vue';
import LayoutEmpty from './views/layouts/LayoutEmpty.vue';

import './index.css'
import './assets/css/style.css'

import App from './App.vue'
import router from './router'
import store from './store'

library.add(fas, fab)
dom.watch()

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('default-layout', LayoutDashboard)
app.component('empty-layout', LayoutEmpty)
app.use(urql, { url: 'http://localhost:8000/felicity-gql'})
app.use(router)
app.use(store)
app.mount('#app')