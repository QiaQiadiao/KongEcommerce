<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- 一级路由出口 -->
   <RouterView/>
   <div class="test" style="height: 1800px;">
    scss test
   </div>
</template>

<style scoped lang="scss">
.test {
  color:$priceColor
}
</style>

