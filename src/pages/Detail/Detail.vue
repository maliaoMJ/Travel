<template>
  <div class="detail-page" ref="detail">
    <header :style="{opacity: opacity}" v-show="showAbs">
      <i class="fa fa-angle-left" @click="goback"></i>
      <h3>景点详情</h3>
    </header>
    <div class="content-box">
      <div class="banner" @click="showGallaryPic">
        <img :src="bannerImg" alt="">
        <div class="info">
          <div class="top" v-show="!showAbs" @click.stop="goback"><i class="fa fa-angle-left"></i></div>
          <div class="bottom">
            <div class="left">{{sightName}}</div>
            <div class="right"><i class="fa fa-image"></i>{{gallaryImgs.length}}</div>
          </div>
        </div>
      </div>
    <transition name="fade">
      <gallary v-show="showGallary" :gallaryImgs="gallaryImgs" @close="showGallary = !showGallary"></gallary>
    </transition>
    <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import detailData from '../../mock/detail.json'
import Gallary from '@/components/Gallary/Gallary'
import DetailList from '@/components/DetailList/DetailList'
export default {
  name: 'Detail',
  data () {
    return {
      opacity: 0,
      showAbs: false,
      showGallary: false,
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    Gallary,
    DetailList
  },
  methods: {
    goback: function () {
      this.$router.back()
    },
    handleScroll: function () {
      this.$nextTick(() => {
        const detailDom = this.$refs.detail
        const top = detailDom.scrollTop
        if (top > 60 && top < 140) {
          this.showAbs = true
          this.opacity = top / 140
        } else if (top < 60) {
          this.showAbs = false
        }
      })
    },
    showGallaryPic: function () {
      this.showGallary = true
    },
    getDetailData () {
      this.categoryList = detailData.data.categoryList
      this.gallaryImgs = detailData.data.gallaryImgs
      this.bannerImg = detailData.data.bannerImg
      this.sightName = detailData.data.sightName
    }
  },
  mounted () {
    // console.log(this.$store.getters.getCurrentCity, this.$route.params.id)
    // window.addEventListener('scroll', this.handleScroll, true)
    this.getDetailData()
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll, true)
  }
}
</script>

<style lang="less" scoped>
.detail-page{
    width:100%;
    height:100%;
    position:relative;
    overflow: auto;
    header{
      display: flex;
      flex-direction: row;
      background-color: #17a4bd;
      color:#fff;
      width:100%;
      height:0.72rem;
      position:fixed;
      top:0;
      left:0;
      z-index: 20;
      h3{
        font-size: 0.28rem;
        line-height: 0.72rem;
        width:100%;
        text-align: center;
      }
      i{
        position:absolute;
        top:0px;
        left:0.2rem;
        display: block;
        font-size:0.6rem;
        text-align: center;
        line-height: 0.72rem;
      }
    }
    .content-box{
      height:2000px;
      width:100%;
      overflow: auto;
      .banner{
        width:100%;
        height:0px;
        padding-bottom:50%;
        position:relative;
        img{
          width:100%;
          height:100%;
          position:absolute;
        }
        .info{
          width:100%;
          height:100%;
          background:rgba(0,0,0,0);
          position:absolute;
          top:0px;
          left:0px;
          bottom:0px;
          right:0px;
          .top {
            width:.55rem;
            height:.55rem;
            border-radius: .55rem;
            margin-top:0.2rem;
            margin-left: 0.2rem;
            background:rgba(0,0,0,0.6);
            i{
              display: block;
              width:100%;
              height:100%;
              color:#fff;
              text-align: center;
              line-height: 0.55rem;
              font-size:0.55rem;
              padding:0px;
              margin:0px;
            }
          }
          .bottom{
            position:absolute;
            bottom:0px;
            left:0px;
            width:100%;
            height:.6rem;
            background-image:linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
            overflow: auto;
            font-size:.32rem;
            line-height: 0.6rem;
            color:#fff;
            .left{
              float: left;
              padding-left: .2rem;
              max-width:350px;
              overflow: hidden;
              text-overflow:ellipsis;
              white-space: nowrap;
            }
            .right{
              float:right;
              padding-right: 0.2rem;
              font-size:0.25rem;
              i{
                padding-right: .1rem;
              }
            }
          }
        }
      }
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
