<template>
<div class="text-center py-4 h-full">
          <h2 class="text-xl">الطلبات</h2>

      <div class="p-4 flex justify-center items-center w-full">
      <orders-table />

  </div>
</div>

</template>

<script>
import OrdersTable from '@/components/OrdersPage/OrdersTable.vue'
export default {
  components: { OrdersTable },
name:"OrdersPage"
}
</script>

<style>

</style>