<template>
  <div class="gallary" @click="$emit('close')">
    <div class="gallary-box">
    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in gallaryImgs" :key="item">
          <img :src="item" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination gallary-pagination"  slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Gallary',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    gallaryImgs: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: false,
        loop: false,
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.gallary .gallary-pagination{
    font-size: 0.3rem;
}
.gallary{
  width:100%;
  height:100%;
  position: fixed;
  top:0px;
  bottom:0px;
  left:0px;
  right:0px;
  background:rgba(0,0,0,0.8);
  color:#fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .gallary-box{
    width:100%;
    height:50%;
    margin-top:-3rem;
  }
  img{
    width:100%;
    height:100%;
  }
}
</style>
