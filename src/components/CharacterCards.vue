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
    <h1>Locations</h1>
    <div class="ui divider"></div>
    <div class="ui container cards">
      <div
        v-for="location in locations"
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

  export default {
    setup () {
      const {loadingState, elements: characters, fetchResource: fetchAllCharacters} = useFetchResource('https://rickandmortyapi.com/api/character')
      const {elements: locations, fetchResource: fetchAllLocations} = useFetchResource('https://rickandmortyapi.com/api/location')
      const {ordered: charactersOrdered, setOrderKey} = useOrdering(characters)
      return {loadingState, characters, fetchAllCharacters, charactersOrdered, setOrderKey, locations, fetchAllLocations}
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
