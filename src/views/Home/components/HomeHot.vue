<script setup>
import { onMounted, ref } from 'vue';
import { getHotAPI } from '@/apis/home';
import HomePannel from './HomePannel.vue';
const hotList = ref([])
const getHot = async () => {
    const res = await getHotAPI()
    hotList.value = res.result
    console.log(hotList.value);
}
onMounted(()=>getHot())
</script>

<template>
  <HomePannel title="人气推荐" sub-title="人气爆款 不容错过">
      <ul class="goods-list">
        <li v-for="item in hotList" :key="item.id">
          <RouterLink to="/">
            <img v-img-lazy="item.picture" alt="">
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
  </HomePannel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>