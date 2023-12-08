<script>
import {RouterView} from 'vue-router'
import navigasiVue from './component/navigasi.vue'
export default{
  components:{
    navigasiVue
  }
}
</script>

<template>
  <div class="container">
    <navigasiVue></navigasiVue>
    <RouterView/>
  </div>
</template>