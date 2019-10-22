<template>
    <div class="ui card">
      <template v-if="loadingState === 'success'">
        <div class="image">
          <img :src="user.image">
        </div>
        <div class="content">
          <span class="header">{{user.name}}</span>
          <div class="meta">
            <span class="date">Status: {{user.status}}</span>
          </div>
          <div class="description">
            {{user.species}}
          </div>
        </div>
        <div class="extra content">
          <a :href="`https://github.com/${username}?tab=followers`">
            <i class="user icon"></i>
            Friends
          </a>
        </div>
      </template>
      <span v-if="loadingState === 'loading'">Loading user....</span>
    </div>
</template>

<script>
  import axios from 'axios'
  import {ref} from '@vue/composition-api'
  export default {
    props: {
      username: {
        type: String,
        required: true
      }
    },
    setup (props) {
      const {user, loadingState, fetchCharacter} = useFetchCharacter(props)
      fetchCharacter(1)
      return {user, loadingState}
    }
  }
  
  function useFetchCharacter() {
    let user = ref({})
    let loadingState = ref('loading')

    const fetchCharacter = (id) => {
      axios({
        method: 'GET',
        url: `https://rickandmortyapi.com/api/character/${id}`
      })
        .then(response => {
          setTimeout(() => {
            console.log('🎉')
            loadingState.value = 'success'
            user.value = response.data
          }, 1000)
        })
    }

    return {user, loadingState, fetchCharacter}
  }
</script>

<style scoped>

</style>
