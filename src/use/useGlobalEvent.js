import {onMounted, onUnmounted} from '@vue/composition-api'

export default (event, callback) => {
  onMounted(() => {
    window.addEventListener(event, callback)
  })
  onUnmounted(() => {
    window.removeEventListener(event, callback)
  })
}
