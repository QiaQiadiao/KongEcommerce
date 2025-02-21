<script setup>
import LayoutFixed from './commponents/LayoutFixed.vue';
import LayoutNav from '@/views/Layout/commponents/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/commponents/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/commponents/LayoutFooter.vue'
import { useCategoryStore } from '@/stores/categoryStore';
import { onMounted } from 'vue';
const categoryStore = useCategoryStore();
onMounted(()=>categoryStore.getCategory());
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <!-- <RouterView :key="$route.fullPath"/> -->
  <RouterView />
  <LayoutFooter />
</template>