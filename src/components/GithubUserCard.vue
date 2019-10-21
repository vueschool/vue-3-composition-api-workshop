<template>
    <div class="ui card">
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
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    template: '#github-user-card-template',
    props: {
      username: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        user: {}
      }
    },
    created() {
      axios.get(`https://api.github.com/users/${this.username}`)
        .then(response => {
          this.user = response.data
        })
    }
  }
</script>

<style scoped>

</style>
