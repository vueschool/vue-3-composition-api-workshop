<template>
  <div class="hello">
    <h1 class="ui header">{{ msg }}</h1>
      <CharacterCards />
  </div>
</template>

<script>
import CharacterCards from './CharacterCards'
export default {
  name: 'HelloWorld',
  components: {
    CharacterCards
  },
  props: {
    msg: String
  },
  data () {
    return {
      ids: [99]
    }
  }
}
</script>
