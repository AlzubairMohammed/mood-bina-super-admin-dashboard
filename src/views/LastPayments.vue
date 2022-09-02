<template>
  <div class="p-4 w-full">
   
      <div class="py-4">

                 <h2 class="text-center py-2">
                     الرصيد الحالي
      </h2>
          <last-pahements-header />

             <h2 class="text-center py-2">
          العمليات السابقه
      </h2>
          <last-payments-content />
      </div>
  </div>
</template>

<script>
import LastPahementsHeader from '@/components/LastPayments/LastPahementsHeader.vue'
import LastPaymentsContent from '@/components/LastPayments/LastPaymentsContent.vue'
export default {
  components: { LastPahementsHeader, LastPaymentsContent },

}
</script>

<style>

</style>