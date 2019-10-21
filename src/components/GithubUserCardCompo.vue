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
    setup (props) {
      console.log(props.username)
    },
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
      axios({
        method: 'GET',
        url: `https://api.github.com/users/${this.username}?token=94b83ad8d43b186ff66c5b81b56333a11896f65d`,
        headers: {
          Authorization: `Bearer 94b83ad8d43b186ff66c5b81b56333a11896f65d`,
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          this.user = response.data
        })
    }
  }
</script>

<style scoped>

</style>
