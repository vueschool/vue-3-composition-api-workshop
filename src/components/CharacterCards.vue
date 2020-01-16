<template>
  <div>
    <div>
      Order by
      <button class="ui blue button" @click="setOrderKey('name')">Name</button>
      <button class="ui orange button" @click="setOrderKey('id')">Id</button>
    </div>
    <div class="ui divider"></div>
    <div class="ui container cards">
      <div
        v-for="character in charactersOrdered"
        :key="character.id"
        class="ui card"
      >
        <div class="image">
          <img :src="character.image">
        </div>
        <div class="content">
          <span class="header">{{character.name}}</span>
          <div class="meta">
            <span class="date">Status: {{character.status}}</span>
          </div>
        </div>
        <div class="extra content">
          {{character.species}}
        </div>
      </div>
    </div>

    <div v-if="loadingState === 'loading'">Loading characters...
    <img src="/spinner.svg" alt=""></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import orderBy from 'lodash.orderby'
  import {ref, computed} from '@vue/composition-api'

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

  const useOrdering = elements => {
    const orderKey = ref('id')
    const ordered = computed(() => orderBy(elements.value, orderKey.value))

    const setOrderKey = key => orderKey.value = key

    return {ordered, orderKey, setOrderKey}
  }

  export default {
    setup () {
      const {loadingState, characters, fetchAllCharacters} = useFetchAllCharacters()
      const {ordered: charactersOrdered, setOrderKey} = useOrdering(characters)
      return {loadingState, characters, fetchAllCharacters, charactersOrdered, setOrderKey}
    },
    created () {
      this.fetchAllCharacters()
    }
  }


  // import {ref} from '@vue/composition-api'
  // export default {
  //   props: {
  //     id: {
  //       type: Number,
  //       required: true
  //     }
  //   },
  //   setup (props) {
  //     console.log(props)
  //     const {user, loadingState, fetchCharacter} = useFetchCharacter()
  //     return {user, loadingState, fetchCharacter}
  //   },
  //   created () {
  //     this.fetchCharacter(this.id)
  //   }
  // }
  //
  // function useFetchData() {
  //   let results = ref([])
  //   let loadingState = ref('loading')
  //
  //   const fetchCharacter = (id) => {
  //     axios({
  //       method: 'GET',
  //       url: `https://rickandmortyapi.com/api/character/${id}`
  //     })
  //       .then(response => {
  //         setTimeout(() => {
  //           console.log('🎉')
  //           loadingState.value = 'success'
  //           user.value = response.data
  //         }, 1000)
  //       })
  //   }
  //
  //   return {user, loadingState, fetchCharacter}
  // }
  // function useFetchCharacter() {
  //   let user = ref({})
  //   let loadingState = ref('loading')
  //
  //   const fetchCharacter = (id) => {
  //     axios({
  //       method: 'GET',
  //       url: `https://rickandmortyapi.com/api/character/${id}`
  //     })
  //       .then(response => {
  //         setTimeout(() => {
  //           console.log('🎉')
  //           loadingState.value = 'success'
  //           user.value = response.data
  //         }, 1000)
  //       })
  //   }
  //
  //   return {user, loadingState, fetchCharacter}
  // }
</script>

<style scoped>

</style>
