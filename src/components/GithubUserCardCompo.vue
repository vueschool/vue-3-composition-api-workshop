<template>
    <div class="ui card">
      <template v-if="loadingState === 'success'">
        <div class="image">
          <img :src="user.avatar_url">
        </div>
        <div class="content">
          <a :href="`https://github.com/${username}`" class="header">{{user.name}}</a>
          <div class="meta">
            <span class="date">Joined in {{user.created_at}}</span>
          </div>
          <div class="description">
            {{user.bio}}
          </div>
        </div>
        <div class="extra content">
          <a :href="`https://github.com/${username}?tab=followers`">
            <i class="user icon"></i>
            {{user.followers}} Friends
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
      const {user, loadingState} = useFetchGithubUser(props)
      return {user, loadingState}
    }
  }

  function useFetchGithubUser(props) {
    let user = ref({})
    let loadingState = ref('loading')
    axios({
      method: 'GET',
      url: `https://api.github.com/users/${props.username}?token=94b83ad8d43b186ff66c5b81b56333a11896f65d`,
      headers: {
        Authorization: `Bearer 94b83ad8d43b186ff66c5b81b56333a11896f65d`,
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        setTimeout(() => {
          console.log('🎉')
          loadingState.value = 'success'
          user.value = response.data
        }, 3000)
      })
    return {user, loadingState}
  }
</script>

<style scoped>

</style>
