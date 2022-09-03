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
          <th scope="col" class="px-6 py-3">رقم القسم</th>
          <th scope="col" class="px-6 py-3"> صورة القسم </th>
          <th scope="col" class="px-6 py-3">اسم القسم</th>
          <th scope="col" class="px-6 py-3">  القسم الاساسي</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Delete</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" :key="subCategory.id" v-for="(subCategory, index) in allSubSections">
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
            {{++index}}
          </th>
          <td class="px-6 py-4">
              <img :src="'http://localhost:5000/uploads/' + subCategory.image" alt="" class="w-20">
          </td>
          <td class="px-6 py-4">{{subCategory.name}}</td>
          <td class="px-6 py-4">{{subCategory.sections.name}} </td>
            <td class="px-6 py-4">
                 <a
              href="#"
              class="
                font-medium
                text-blue-600
                dark:text-blue-500
                hover:underline
              "
              data-modal-toggle="EditSub"
              >تعديل </a
            >
                
          </td>
          <td class="px-6 py-4">
                 <a
              href="#"
              class="
                font-medium
                text-red-600
                dark:text-blue-500
                hover:underline
              "
              @click="deletSubCategory(subCategory.id)"
              >حذف </a
            >
          </td>
        </tr>
      </tbody>
    </table>

    <!-- modaaaaaaaaal -->
      <div id="EditSub" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    تعديل القسم
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5  inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="EditSub">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6">
               <edit-sub-cat-input />
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import EditSubCatInput from '../EditSubCategory/EditSubCatInput.vue';
import { mapActions, mapGetters} from 'vuex';
export default {
    name:"SubCategoryTabel",
    data(){
      return{subSectionsData:[]}
    },
    components:{EditSubCatInput},
    methods:{
      deletSubCategory(id) {
      this.$swal
        .fire({
          title: " هل انت متاكد ؟ ",
          text: " لن تستطيع استرجاع هذا القسم مجددا ! ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#1C64F2",
          cancelButtonColor: "#d33",
          confirmButtonText: " نعم, انا متاكد ",
          cancelButtonText: "الغاء",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch("deletSubSection", id);
            this.$swal.fire({
              icon: "success",
              title: " تم ",
              text: " تم حذف القسم بنجاح ",
              confirmButtonColor: "#16a34a",
            });
          } else {
            this.$swal.fire({
              icon: "error",
              title: " الغاء ",
              text: " تم الغاء عملية الحذف ",
              confirmButtonColor: "#16a34a",
              confirmButtonText: "حسنا",
            });
          }
        });
    },
      ...mapActions(['getSubSections','fetchCategories'])
    },
    computed: {
      ...mapGetters(['allSubSections','allCategories']) 
       
    },
    created() {
      this.getSubSections()
      this.fetchCategories()
      },
    afterMounted() {
    
    },
    };
</script>
        

<style>
</style>