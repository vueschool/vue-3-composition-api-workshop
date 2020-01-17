import axios from 'axios'
import {ref} from '@vue/composition-api'

const useFetchResource = endpoint => {
  const loadingState = ref(null)
  const elements = ref([])

  const fetchResource = () => {
    loadingState.value = 'loading'
    axios.get(endpoint)
      .then(response => {
        setTimeout(() => {
          loadingState.value = 'success'
          elements.value = response.data.results
        }, 1000)
      })
  }

  return {loadingState, elements, fetchResource}
}

export default useFetchResource
