<script setup>
import LayoutNav from '@/views/Layout/commponents/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/commponents/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/commponents/LayoutFooter.vue'
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>