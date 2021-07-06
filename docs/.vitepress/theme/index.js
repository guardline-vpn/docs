// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Alert from './components/Alert.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Alert', Alert)
  }
}