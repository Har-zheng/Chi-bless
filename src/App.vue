<template>
  <div id="app">
    <Publics></Publics>
    <router-view/>
    
  </div>
</template>

<script>

import Publics from '@/components/publics'

export default {
  name: 'App',
  components:{
    Publics
  }
}
</script>

<style>

</style>
