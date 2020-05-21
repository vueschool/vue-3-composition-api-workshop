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

    <div v-if="loadingState === 'loading'">
      Loading characters...
      <img src="/spinner.svg" alt="loading">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import orderBy from 'lodash.orderby'
  export default {
    data () {
      return {
        characters: [],
        loadingState: null,
        orderKey: 'id'
      }
    },
    computed: {
      charactersOrdered() {
        return orderBy(this.characters, this.orderKey)
      }
    },
    methods: {
      setOrderKey(key) {
        this.orderKey = key
      },
      fetchAllCharacters () {
        this.loadingState = 'loading'
        axios.get('https://rickandmortyapi.com/api/character')
          .then(response => {
            setTimeout(() => {
              this.loadingState = 'success'
              this.characters = response.data.results
            }, 1000)
          })
      }
    },
    created () {
      this.fetchAllCharacters()
    }
  }
</script>

<style scoped>

</style>
