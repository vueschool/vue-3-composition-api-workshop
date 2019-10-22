<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="app" class="ui container cards">
<!--      <GithubUserCard-->
<!--        v-for="username in usernames"-->
<!--        :username="username"-->
<!--        :key="username"-->
<!--      />-->

      <GithubUserCardCompo
      v-for="username in usernames"
      :username="username"
      :key="username"
    />
    </div>
  </div>
</template>

<script>
  import GithubUserCardCompo from './CharacterCard'
  // import GithubUserCard from './GithubUserCard'
export default {
  name: 'HelloWorld',
  components: {
    // GithubUserCard,
    GithubUserCardCompo
  },
  props: {
    msg: String
  },
  data () {
    return {
      usernames: ['hootlex']
      // usernames: ['hootlex', 'rahaug', 'sdras', 'akryum']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
