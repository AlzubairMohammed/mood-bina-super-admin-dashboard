<template>
  <form
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="updateCategory()"
    ref="form"
  >
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
  data() {
    return {
      category: {},
    };
  },
  methods: {
    updateCategory() {
      const id = this.category.id;
      const formData = new FormData(this.$refs.form);
      const payload = { id, category: formData };
      this.$store.dispatch("updateCategory", payload);
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
