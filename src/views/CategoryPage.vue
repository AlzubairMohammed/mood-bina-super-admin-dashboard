<template>
  <div class="w-full py-8">
    <h2 class="text-center py-4 text-black">كل الاقسام</h2>
    <div class="text-center pb-4">
      <router-link to="/AddCategory">
        <button class="px-4 py-2 bg-blue-600 text-white">اضف قسم جديد</button>
      </router-link>
    </div>
    <div class="flex justify-center items-center">
        <category-table />
    </div>
  </div>
</template>

<script>
import CategoryTable from '@/components/CategoryPage/CategoryTable.vue';
export default {
  components: { CategoryTable },
  name: "CategoryPage",
};
</script>

<style>
</style>