<template>
  <div v-if="user_session !== true">
    <div class="md:flex block">
      <app-header></app-header>
      <router-view />
    </div>
  </div>
  <div v-else>
    <login-page></login-page>
  </div>
  <modals-container></modals-container>

</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import { ModalsContainer } from 'vue-final-modal';
import LoginPage from './views/LoginPage.vue'

export default {
  components: {
    AppHeader,
    ModalsContainer,
    LoginPage
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
<!--
  admin4
  admin4@gmail.com
  123123123
  0123456789
-->