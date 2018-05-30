<template>
  <div class="Alphabet">
   <div class="item" v-for="item in AlphabetData" :key="item"
   @click="handleClick"
   @touchstart.prevent="handleTouchStart"
   @touchmove="handleTouchMove"
   @touchend="handleTouchEnd"
   >{{item}}</div>
  </div>
</template>
<script>
export default {
  name: 'Alphabet',
  props: {
    AlphabetData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  methods: {
    handleClick: function (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 这里setTimeOut节流简单处理
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 180
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.AlphabetData.length) {
            this.$emit('change', this.AlphabetData[index])
          }
        }, 16)
      }
    },
    handleTouchEnd: function () {
      this.touchStatus = false
    }
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.Alphabet{
  position:fixed;
  right:0px;
  top:180px;
  color:#17a4bd;
  height:auto;
  width:20px;
  z-index: 12;
  .item{
    width:100%;
    height:20px;
    font-size:0.3rem;
    text-align: center;
    line-height: 20px;
  }
}
</style>
