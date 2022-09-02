<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
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
          <th scope="col" class="px-6 py-3">اسم الزبون</th>
          <th scope="col" class="px-6 py-3">رقم الزبون</th>
          <th scope="col" class="px-6 py-3">عنوان الزبون</th>
          <th scope="col" class="px-6 py-3">الحاله</th>
          <th scope="col" class="px-6 py-3">تاريخ الطلب</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
          <td class="px-6 py-4">الكلاكله القبه اسوب 15 جوار الكنيسه</td>
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
    name:"CustomerDetails"
};
</script>

<style>
</style>