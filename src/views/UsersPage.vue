<template>
  <div class="w-full py-8">
    <h2 class="text-center py-4 text-black">كل المستخدمين</h2>
    <div class="text-center pb-4">
      <router-link to="/AddUser">
        <button class="px-4 py-2 bg-blue-600 text-white">اضف مستخدم جديد</button>
      </router-link>
    </div>
    <div class="flex justify-center items-center">
        <users-tabel />
  </div>
  </div>
</template>

<script>
import UsersTabel from '@/components/UsersPage/UsersTabel.vue';
export default {
  name: "UsersPage",
  components : {UsersTabel}
};
</script>

<style>
</style>