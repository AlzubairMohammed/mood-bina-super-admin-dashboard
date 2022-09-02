<template>
  <div class="p4 w-full">
      <h2 class="text-center py-8">تعديل المنتج</h2>
      <edit-product-input />
  </div>
</template>

<script>
import EditProductInput from '@/components/EditProduct/EditProductInput.vue'
export default {
  components: { EditProductInput },
name:"EditProduct"
}
</script>

<style>

</style>