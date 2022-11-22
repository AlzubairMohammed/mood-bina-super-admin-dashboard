<template>
  <aside class="md:w-64 w-full" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
      <div class="flex items-center md:justify-center justify-between pl-2.">
        <span class="self-center text-xl font-semibold whitespace-nowrap"
          >لوحه التحكم</span
        >
        <svg
          @click="menuToggle()"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul class="md:block" :class="{ block: menuOpen, hidden: menuClose }">
        <!-- home -->
        <router-link to="/">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span class="mr-3">الرئيسيه </span>
            </a>
          </li>
        </router-link>

        <!-- catergories -->
        <router-link to="/CategoryPage">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              <span class="mr-3">الاقسام</span>
            </a>
          </li>
        </router-link>

        <!-- sub categories -->
        <router-link to="/SubCategory">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              <span class="mr-3">الاقسام الفرعيه</span>
            </a>
          </li>
        </router-link>

        <!-- users -->
        <router-link to="/UsersPage">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span class="mr-3">المستخدمين</span>
            </a>
          </li>
        </router-link>

        <!-- orders -->
        <router-link to="/OrdersPage">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>
              <span class="mr-3">عمليات الشراء</span>
            </a>
          </li>
        </router-link>

        <!-- payments -->
        <router-link to="/PaymentsPage">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="mr-3">طلبات السحب</span>
            </a>
          </li>
        </router-link>

        <!-- last payments -->
        <router-link to="/LastPayments">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span class="mr-3"> تفاصيل الحساب</span>
            </a>
          </li>
        </router-link>

     <!-- profile page -->
        <router-link to="/ProfilePage">
          <li>
            <a
              href="#"
              class="
                flex
                items-center
                p-2
                text-base
                font-normal
                text-gray-900
                rounded-lg
                hover:bg-gray-100
              "
            >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>

              <span class="mr-3">  الملف الشخصي</span>
            </a>
          </li>
        </router-link>
        <!-- logout -->
        <li>
          <a
            href="#"
            class="
              flex
              items-center
              p-2
              text-base
              font-normal
              text-gray-900
              rounded-lg
              hover:bg-gray-100
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span class="mr-3 text-red-500" @click="logOut()">سجيل الخروج</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "AppHeader",
  data() {
    return {
      menuClose: true,
      menuOpen: false,
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem('user_token')
      location.reload();
      console.log('hi');
    },
    menuToggle() {
      this.menuClose = !this.menuClose;
      this.menuOpen = !this.menuOpen;
    },
   ...mapActions(['getSubSections','fetchCategories'])
    },
    computed: {
      ...mapGetters(['allSubSections','allCategories']) 
       
    },
    created() {
      this.getSubSections()
      this.fetchCategories()
      }
};
</script>

<style>
</style>