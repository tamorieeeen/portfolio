import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/* import the fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { configure } from 'vue-gtag'
import { faClockRotateLeft, faHeadSideCough, faAward,
  faKeyboard, faDisplay, faNetworkWired, faRobot, faCode,
  faUserLock, faChartLine, faBan, faPenNib, faLink, faHeadset,
  faBullhorn, faPencil, faComments, faStar, faForward, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

library.add(faClockRotateLeft, faHeadSideCough, faAward,
  faKeyboard, faDisplay, faNetworkWired, faRobot, faCode,
  faUserLock, faChartLine, faBan, faPenNib, faLink, faHeadset,
  faBullhorn, faPencil, faComments, faStar, faForward, faArrowUpRightFromSquare)
configure({
  tagId: 'G-5VLNRRFKQ0',
  pageTracker: {router}
})

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
