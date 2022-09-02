<template>
   <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
       <h2 class="text-center">
           تفاصيل المستخدم
       </h2>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="
          text-xs text-gray-700
          uppercase
          bg-gray-50
          dark:bg-gray-700 dark:text-gray-400
        "
      >
        <tr>
          <th scope="col" class="px-6 py-3">اسم المستخدم</th>
          <th scope="col" class="px-6 py-3">رقم المستخدم</th>
          <th scope="col" class="px-6 py-3"> مبلغ السحب </th>
          <th scope="col" class="px-6 py-3">الحاله</th>
          <th scope="col" class="px-6 py-3">تاريخ الطلب</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" >
          <th
            scope="row"
            class="
              px-6
              py-4
              font-medium
              text-gray-900
              dark:text-white
              whitespace-nowrap
            "
          >
            احمد عادل محمد
          </th>
          <td class="px-6 py-4">0125803725</td>
          <td class="px-6 py-4">1256$</td>
          <td class="px-6 py-4">قيد الانتظار</td>
          <td class="px-6 py-4">
           22/5/2022 || 03:32 pm
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name:"PaymentsComplete"
};
</script>

<style>
</style>