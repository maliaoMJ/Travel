<template>
    <div class="homePage">
        <home-header></home-header>
        <swiper></swiper>
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader/HomeHeader'
import Swiper from '@/components/Swiper/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Swiper
  }
}
</script>
<style lang="less" scoped>
.homePage{
  width:100%;
  height:100%;
}
</style>
