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
    responseAlert(text, title, icon) {
      this.$swal.fire({
        title: `${title}`,
        text: ` ${text} `,
        icon: `${icon}`,
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  },
  provide() {
    return {
      checkCookie: this.checkCookie,
      responseAlert: this.responseAlert,
    };
  }
};
</script>

<style>
</style>
