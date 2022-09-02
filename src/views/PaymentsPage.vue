<template>
<div class="text-center py-4 h-full">
          <h2 class="text-xl">طلبات السحب</h2>

      <div class="p-4 flex justify-center items-center w-full">
      <Payments-table />

  </div>
</div>

</template>

<script>
import PaymentsTable from '@/components/PaymentsPage/PaymentsTable.vue'
export default {
  components: { PaymentsTable },
name:"PaymentsPage"
}
</script>

<style>

</style>