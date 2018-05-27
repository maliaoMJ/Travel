<template>
    <div class="homePage">
        <home-header></home-header>
        <swiper :imgsArr="indexData.swiperList"></swiper>
        <icons :iconsData="indexData.iconList"></icons>
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader/HomeHeader'
import Swiper from '@/components/Swiper/Swiper'
import Icons from '@/components/Icons/Icons'
import indexResData from '../../mock/index.json'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper,
    Icons
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
}
</style>
