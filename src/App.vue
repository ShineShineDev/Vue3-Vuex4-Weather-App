<template>
  <headerComponent/>
  <RouterView/>
</template>
<script >
import Home from './views/HomeView.vue'
import headerComponent from './components/headerComponent.vue'
export default {
  components : {
    Home,headerComponent
  }
}
</script>
