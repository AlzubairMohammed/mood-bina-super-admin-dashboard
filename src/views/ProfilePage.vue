<template>
<div class="w-full py-8">
        <h2 class="text-center py-8">الملف الشخصي</h2>
        <div class="flex justify-center">
          <profile-header  class="w-full"/>
<profule-content  class="w-full"/>  
        </div>

</div>

</template>

<script>
import ProfileHeader from '@/components/ProfilePage/ProfileHeader.vue'
import ProfuleContent from '@/components/ProfilePage/ProfuleContent.vue'
export default {
components :{ProfileHeader,ProfuleContent}
}
</script>

<style>

</style>
