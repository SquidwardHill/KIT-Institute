// plugins/bl-components.js

import Vue from 'vue'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const globalComponents = { NavBar, Footer }

Object.entries(globalComponents).forEach(([name, component]) => {
  Vue.component(name, component)
})

// nuxt.config.js
export default {
  plugins: ['~plugins/global-components']
}
