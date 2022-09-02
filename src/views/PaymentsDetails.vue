<template>
  <div class="w-full p-4">

      <h2 class="text-xl text-center">تفاصيل طلب السحب</h2>


          <div class="flex justify-between items-center py-4">
      <div class="inputs w-full">
            <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      > الحاله </label
    >
    <select
      id="countries"
      class="
        bg-gray-50
        border border-gray-300
        text-gray-900 text-sm
        rounded-lg
        focus:ring-black focus:border-black
        block
        w-full
        p-2.5
        dark:bg-gray-700
        dark:border-gray-600
        dark:placeholder-gray-400
        dark:text-white
        dark:focus:ring-blue-500
        dark:focus:border-blue-500
      "
    >
      <option>تغيير الحاله الي قيد التنفيد</option>
      <option>تغيير الحاله الي مكتمل</option>
      <option>تغيير الحاله الي ملغي </option>
    </select>
      </div>
      <div class="button w-full text-center">
                <button
        class="bg-blue-600 px-4 py-2 text-white rounded mt-4"
        expand="block"
        @click="send()"
      >
        تعديل  الحاله
      </button>
      </div>

    </div>


      <payments-complete />
  </div>
</template>

<script>
import PaymentsComplete from '@/components/PaymentsDetails.vue/PaymentsComplete.vue'
export default {
  components: { PaymentsComplete },

}
</script>

<style>

</style>