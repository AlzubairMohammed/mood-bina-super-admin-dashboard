<template>
  <form ref="form" class="w-full p-4" @submit.prevent="createUser()">
    <div class="floating-input mb-5 relative">
      <input
        type="text"
        id="name"
        name="name"
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
        type="text"
        id="name"
        name="email"
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
        >االايميل</label
      >
    </div>



    <div class="floating-input mb-5 relative">
      <input
        type="number"
        id="phone"
        name="tel"
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
        رقم الهاتف</label
      >
    </div>
       <div class="floating-input mb-5 relative">
      <input
        type="password"
        id="name"
        name="password"
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
        >كلمه السر</label
      >
    </div>
    
    <label
      for="countries"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      > نوع المستخدم </label
    >
    <select
      id="countries"
      name="role"
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
      <option value="admin">مشرف</option>
      <option value="vendor">تاجر </option>
    </select>


    <div class="checkout py-2">
      <button
        class="bg-blue-600 px-4 py-2 text-white rounded"
        expand="block"
      >
        اضف المستخدم
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddUserInput",
  methods: {
    createUser() {
      const formData = new FormData(this.$refs.form);
      this.$store.dispatch("createUser", formData);
      this.success = true;
    },
  },
};
</script>

<style>
</style>