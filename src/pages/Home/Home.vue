<template>
    <div class="homePage">
        <home-header></home-header>
        <swiper :imgsArr="indexData.swiperList"></swiper>
        <icons :iconsData="indexData.iconList"></icons>
        <recommend :list="indexData.recommendList"></recommend>
        <weekend :list="indexData.weekendList"></weekend>
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader/HomeHeader'
import Swiper from '@/components/Swiper/Swiper'
import Recommend from '@/components/Recommend/Recommend'
import Weekend from '@/components/Weekend/Weekend'
import Icons from '@/components/Icons/Icons'
import indexResData from '../../mock/index.json'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  data () {
    return {
      indexData: []
    }
  },
  mounted () {
    if (indexResData.status) {
      this.indexData = indexResData.data
    }
  }
}
</script>
<style lang="less" scoped>
.homePage{
  width:100%;
  height:100%;
  overflow: auto;
}
</style>
