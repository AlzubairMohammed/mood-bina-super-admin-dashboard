<template>
  <div class="md:flex  block">
    <app-header></app-header>
    <router-view />
  </div>
      <modals-container></modals-container>

</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import { ModalsContainer } from 'vue-final-modal';

export default {
  components: {
    AppHeader,
    ModalsContainer
  },
  methods:{
  }
};
</script>

<style>
</style>
