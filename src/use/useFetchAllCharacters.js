import axios from 'axios'
import {ref} from '@vue/composition-api'

const useFetchAllCharacters = () => {
  const loadingState = ref(null)
  const characters = ref([])

  const fetchAllCharacters = () => {
    loadingState.value = 'loading'
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setTimeout(() => {
          loadingState.value = 'success'
          characters.value = response.data.results
        }, 1000)
      })
  }

  return {loadingState, characters, fetchAllCharacters}
}

export default useFetchAllCharacters
