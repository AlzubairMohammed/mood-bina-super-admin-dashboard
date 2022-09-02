<template>
  <div class="w-full">
    <home-services></home-services>

  </div>
</template>

<script>
// @ is an alias to /src
import HomeServices from "../components/HomePage/HomeServices.vue"
export default {
  name: 'HomeView',
components:{
  HomeServices
}
}
</script>
