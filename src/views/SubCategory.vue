<template>
  <div class="w-full py-8">
    <h2 class="text-center py-4 text-black">كل الاقسام الفرعيه</h2>
    <div class="text-center pb-4">
      <router-link to="/AddSubCategory">
        <button class="px-4 py-2 bg-blue-600 text-white">اضف قسم جديد</button>
      </router-link>
    </div>
    <div class="flex justify-center items-center">
      <sub-category-tabel />
    </div>
  </div>
</template>

<script>
import SubCategoryTabel from "@/components/SubCategory/SubCategoryTabel.vue";
export default {
  name: "SubCategory",
  components: { SubCategoryTabel },
};
</script>

<style>
</style>