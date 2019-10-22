<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

      <CharacterCards />
  </div>
</template>

<script>
  import CharacterCards from './CharacterCards'
  // import GithubUserCard from './GithubUserCard'
export default {
  name: 'HelloWorld',
  components: {
    // GithubUserCard,
    CharacterCards
  },
  props: {
    msg: String
  },
  data () {
    return {
      ids: [99]
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
