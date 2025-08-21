import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import AOS from 'aos'
import 'aos/dist/aos.css' // 引入 AOS 的 CSS

createApp(App).mount('#app')

AOS.init({
  duration: 1000, // 動畫持續時間
  once: true, // 動畫只執行一次
})
