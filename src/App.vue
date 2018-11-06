<template>
  <div id="app">
    <Nav width="960px"/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import Nav from '@/components/Nav'
export default {
  name: 'App',
  components: {Nav},
  mounted(){
    this.updateCart()
  },
  methods: mapMutations(['updateCart'])
}
</script>

<style>
  body {
    background: #e0e0e0;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  a {
    color: black;
    text-decoration: none;
  }
  .container {
    width: 960px;
    margin: auto;
  }
</style>
