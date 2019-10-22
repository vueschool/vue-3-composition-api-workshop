<template>
  <div class="hello">
    <h1 class="ui header">{{ msg }}</h1>

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
