<template>
  <div class="carrousel">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in imgsArr" :key="item.id">
          <img :src="item.imgUrl" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Swiper',
  props: {
    imgsArr: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.carrousel{
    width:100%;
    height:0;
    padding-bottom:30%;
    overflow: hidden;
    img {
      width:100%;
      height:100%;
    }
}
</style>
