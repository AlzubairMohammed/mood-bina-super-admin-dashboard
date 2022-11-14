<template>
  <form
    ref="form"
    class="w-full p-4"
    enctype="multipart/form-data"
    @submit.prevent="updateCategory()"
  >
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        name="name"
        :value="subCategory.name"
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





    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      > القسم الاساسي </label
    >
    <select
      id="countries"
      name="sections_id"
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
      :value="subCategory.sections_id"
    >
      <option
        :key="category.id"
        :value="category.id"
        v-for="category in allCategories"
      >
        {{ category.name }}
      </option>
      
    </select>
<div class="drag py-2">
  <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 py-2"
      > صور القسم </label>
    <div class="flex justify-center items-center w-full ">
      
    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input name="photos" id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
</div>

    <div class="checkout">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
      >
      اضف القسم
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "EditSubCatInput",
  inject: ["responseAlert"],
  data(){
    return {
      subCategory:[]
    }
  },
  methods: {
    updateCategory() {
      const id = this.subCategory.id;
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
      this.$store.dispatch("updateSubSections", payload);
      this.$router.push({path: '/subCategory'});
    },
    ...mapActions(['fetchCategories'])
  },
  computed: mapGetters(["allCategories"]),
  created() {
    this.fetchCategories()
    const id = this.$route.params.id;
    const self = this;
    this.$store.state.subSection.subSections.forEach((category) => {
      if (category.id == id) {
        self.subCategory = category;
      }
    });
    console.log(this.subCategory);
  },
  
};
</script>

<style>
</style>