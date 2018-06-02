<template>
  <div class="CityList" ref="wrapper">
    <div>
        <div class="area">
        <div class="title border-topbottom">所在城市</div>
        <div class="button-list">
            <div
            class="button-wrapper"
            >
            <div class="button">{{this.currentCity}}</div>
            </div>
        </div>
        </div>
        <div class="area">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                <div
                class="button-wrapper"
                v-for="item in cityData.hotCities"
                :key="item.id"
                @click="$emit('modifyCity', item.name)"
                >
                <div class="button">{{item.name}}</div>
                </div>
            </div>
        </div>
        <div class="area"
        v-for="(items, key) of cityData.cities"
        :ref="key"
        :key="key"
        >
        <div
        class="title border-topbottom"
        >{{key}}</div>
            <div class="city-lists">
            <ul>
                <li class="city-item border-bottom"
                v-for="cityItem of items"
                :key="cityItem.id"
                @click="$emit('modifyCity', cityItem.name)"
                >{{cityItem.name}}</li>
            </ul>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cityData: {
      type: Object,
      default: function () {
        return {}
      }
    },
    AlphabetStr: {
      type: String,
      default: ''
    },
    currentCity: {
      type: String,
      default: '北京'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper)
    })
  },
  watch: {
    AlphabetStr (oldValue, newValue) {
      if (newValue && this.scroll) {
        const element = this.$refs[this.AlphabetStr][0]
        this.scroll.scrollToElement(element, 300)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.CityList{
  width:100%;
  position:absolute;
  top:1.58rem;
  bottom:0px;
  overflow: hidden;
  background:#fff;
  .area{
    .title{
      font-size:0.28rem;
      color:#666;
      padding-left:0.2rem;
      background:#eee;
      line-height: 0.64rem;
    }
    .button-list{
        overflow: hidden;
        padding: .1rem .6rem .1rem .1rem;
      .button-wrapper{
        float: left;
        width: 33.33%;
        .button{
          margin: .1rem;
          padding: .15rem 0;
          text-align: center;
          border: .02rem solid #ccc;
          border-radius: .06rem;
          font-size:0.25rem;
          &.active{
            border-color:#17a4bd;
          }
        }
      }
    }
    .city-lists{
        li{
          font-size:0.26rem;
          line-height:0.52rem;
          padding-left:0.2rem;
        }
    }
  }
}
</style>
