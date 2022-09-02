<template>
  <div class="p-4 w-full">
      <h2 class="text-center">اضف قسم جديد</h2>

      <add-category-input />
  </div>
</template>

<script>
import AddCategoryInput from '@/components/AddCategory/AddCategoryInput.vue'
export default {
  components: { AddCategoryInput },
  data(){
    return {
      
    }
  }

}
</script>

<style>

</style>