<template>
  <form class="w-full p-4">
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        class="
          border border-gray-200
          focus:outline-none
          rounded-md
          focus:border-gray-500 focus:shadow-sm
          w-full
          p-3
          h-16
        "
        placeholder=" "
        autocomplete="off"
        v-model="name"
      />
      <label
        for="email"
        class="
          absolute
          top-0
          right-0
          px-3
          py-5
          h-full
          pointer-events-none
          transform
          origin-left
          transition-all
          duration-100
          ease-in-out
        "
        >الاسم</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="phone"
        class="
          border border-gray-200
          focus:outline-none
          rounded-md
          focus:border-gray-500 focus:shadow-sm
          w-full
          p-3
          h-16
        "
        placeholder=" "
        autocomplete="off"
        v-model="phone"
      />
      <label
        for="phone"
        class="
          absolute
          top-0
          right-0
          px-3
          py-5
          h-full
          pointer-events-none
          transform
          origin-left
          transition-all
          duration-100
          ease-in-out
        "
      >
        السعر</label
      >
    </div>

    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="phone"
        class="
          border border-gray-200
          focus:outline-none
          rounded-md
          focus:border-gray-500 focus:shadow-sm
          w-full
          p-3
          h-16
        "
        placeholder=" "
        autocomplete="off"
        v-model="phone"
      />
      <label
        for="phone"
        class="
          absolute
          top-0
          right-0
          px-3
          py-5
          h-full
          pointer-events-none
          transform
          origin-left
          transition-all
          duration-100
          ease-in-out
        "
      >
        الكميه</label
      >
    </div>

    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      > التصنيف </label
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
      <option>اسمنت</option>
      <option>مواد نباء</option>
      <option>مواد كهربا</option>
    </select>
<div class="drag py-2">
  <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 py-2"
      > صور المنتج </label>
    <div class="flex justify-center items-center w-full ">
      
    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
</div>

    <div class="checkout">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        @click="send()"
      >
        تعديل الملف الشخصي
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "EditProductInput",
};
</script>

<style>
</style>