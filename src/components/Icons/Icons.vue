<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(item, index) in pages" :key="index">
        <div class="item" v-for="item in pages[index]" :key="item.id">
        <div class="img-icon">
            <img :src="item.imgUrl" :alt="item.desc">
        </div>
        <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'Icons',
  props: {
    iconsData: {
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
  computed: {
    pages: function () {
      const pages = []
      this.iconsData.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = [item]
        } else {
          pages[page].push(item)
        }
      })
      return pages
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>

.icons{
    padding-top:0.2rem;
    background:#fff;
    .item {
      width:25%;
      float:left;
      position:relative;
      padding-bottom:25%;
      .img-icon{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:.44rem;
        margin: 0 auto;
        padding:.1rem;
        padding-left:0.3rem;
        padding-right:0.3rem;
        box-sizing: border-box;
        img{
        width:100%;
        height:100%;
        }
      }
      p{
        position:absolute;
        bottom:0px;
        height:.44rem;
        font-size:0.27rem;
        text-align:center;
        width:100%;
        padding-top:.08rem;
        box-sizing:border-box;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        overflow: hidden;
      }
    }
}
</style>
