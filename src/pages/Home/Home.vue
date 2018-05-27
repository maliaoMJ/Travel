<template>
    <div class="homePage">
        <home-header></home-header>
        <swiper :imgsArr="indexData.swiperList"></swiper>
        <icons :iconsData="indexData.iconList"></icons>
        <recommend :list="indexData.recommendList"></recommend>
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader/HomeHeader'
import Swiper from '@/components/Swiper/Swiper'
import Recommend from '@/components/Recommend/Recommend'
import Icons from '@/components/Icons/Icons'
import indexResData from '../../mock/index.json'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Icons,
    Recommend
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
