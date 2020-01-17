<template>
  <div>
    <VideoPlayer/>
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
    <h1>Locations</h1>
    <div class="ui divider"></div>
    <div class="ui container cards">
      <div
        v-for="location in locationsOrdered"
        :key="location.id"
        class="ui card"
      >
        <div class="content">
          <span class="header">{{location.name}}</span>
          <div class="meta">
            <span class="date">Dimension: {{location.dimension}}</span>
          </div>
        </div>
        <div class="extra content">
          {{location.type}}
        </div>
      </div>
    </div>

    <div v-if="loadingState === 'loading'">Loading elements...
    <img src="/spinner.svg" alt=""></div>
  </div>
</template>

<script>
  import useFetchResource from "../use/useFetchResource";
  import useOrdering from "../use/useOrdering";
  import useGlobalEvent from "../use/useGlobalEvent";
  import VideoPlayer from './VideoPlayer'

  export default {
    setup () {
      const {loadingState, elements: characters, fetchResource: fetchAllCharacters} = useFetchResource('https://rickandmortyapi.com/api/character')
      const {elements: locations, fetchResource: fetchAllLocations} = useFetchResource('https://rickandmortyapi.com/api/location')
      const {ordered: charactersOrdered, setOrderKey: setCharactersOrderKey} = useOrdering(characters)
      const {ordered: locationsOrdered, setOrderKey: setLocationsOrderKey} = useOrdering(locations)

      useGlobalEvent('keydown', () => characters.value.shift())


      return {loadingState, characters, fetchAllCharacters, charactersOrdered, setCharactersOrderKey, locations, locationsOrdered, fetchAllLocations, setLocationsOrderKey}
    },
    components: {
      VideoPlayer
    },
    methods: {
      setOrderKey (key) {
        this.setCharactersOrderKey(key)
        this.setLocationsOrderKey(key)
      }
    },
    created () {
      this.fetchAllCharacters()
      this.fetchAllLocations()
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
