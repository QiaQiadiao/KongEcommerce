<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNew from './components/HomeNew.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomePannel from './components/HomePannel.vue';
</script>
<template>
    <div class="container">
        <HomeCategory/>
        <HomeBanner />
    </div>
    <HomeNew/>
    <HomeHot />
    <HomeProduct />
    <HomePannel title="新鲜好物" sub-title="新鲜好物 好多商品">
    </HomePannel>
    <HomePannel title="人气推荐" sub-title="人气推荐 好多商品">
    </HomePannel>
</template>
