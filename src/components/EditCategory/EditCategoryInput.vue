<template>
  <form
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="updateCategory()"
    ref="form"
  >
  <div
      id="toast-success"
      v-show="success"
      class="flex items-center w-full w-full flex justify-between items-center p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div class="flex items-center">
        <div
          class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="mr-2 text-sm font-normal">تمت اضافه العنصر بنجاح</div>
      </div>

      <button
        type="button"
        class="-mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div> 
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        class="border border-gray-200 focus:outline-none rounded-md focus:border-gray-500 focus:shadow-sm w-full p-3 h-16"
        placeholder=" "
        autocomplete="off"
        name="name"
        v-model="category.name"
      />
      <label
        for="email"
        class="absolute top-0 right-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out"
        >الاسم
      </label>
    </div>

    <div class="drag py-2">
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 py-2"
      >
        صورة القسم
      </label>
      <div class="flex justify-center items-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg
              class="mb-3 w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" name="photos" class="hidden" />
        </label>
      </div>
    </div>
    <img
      v-if="category.image"
      :src="'http://localhost:5000/uploads/' + category.image"
      alt=""
    />

    <div class="checkout">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
        type="submit"
      >
        تعديل القسم
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "EditCategoryInput",
  inject: ["responseAlert"],
  data() {
    return {
      category: {},
    };
  },
  methods: {
    updateCategory() {
      const id = this.category.id;
      const formData = new FormData(this.$refs.form);
      const validationData = Object.fromEntries(formData)
      const payload = { id, category: formData };
      if(!validationData.name) {
        this.error = 'الرجاء ادخال اسم القسم'
        console.log(this.error);
        this.responseAlert(this.error, " عفوا ", "warning");
        return
      }
      if(!validationData.photos.name) {
        this.error = 'الرجاء صورة للقسم'
        console.log(this.error);
        this.responseAlert(this.error, " عفوا ", "warning");
        return
      }
      this.success = true;
      this.$store.dispatch("updateCategory", payload);
      this.$router.push({path: '/CategoryPage'});
    },
  },
  created() {
    const id = this.$route.params.id;
    const self = this;
    this.$store.state.categories.categories.forEach((category) => {
      if (category.id == id) {
        self.category = category;
      }
    });
  },
};
</script>

<style></style>
