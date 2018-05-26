<template>
   <div class="HomeHeader">
     <div class="left"><i class="fa fa-angle-left" @click="goBack"></i></div>
     <div class="center">
       <i class="fa fa-search"></i>
       <input v-model.trim="searchKeywords" placeholder="搜索关键词" @keyup.enter="search"/>
     </div>
     <div class="right">上海&nbsp;<i class="fa fa-caret-down" @click="selectCity"></i></div>
   </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      searchKeywords: ''
    }
  },
  methods: {
    goBack: function () {
      this.$emit('goBack')
    },
    search: function () {
      if (!this.searchKeywords) {
        alert('请输入关键词！')
        return false
      }
      this.$emit('search')
    },
    selectCity: function () {
      this.$emit('selectCity')
    }
  }
}
</script>
<style lang="less" scoped>
.HomeHeader {
  width:100%;
  height:.86rem;
  background:#17a4bd;
  display:flex;
  flex-direction:row;
  .left {
    width:.64rem;
    color:#fff;
    i{
      display: block;
      height:100%;
      width:100%;
      line-height: .86rem;
      text-align:center;
      font-size:0.5rem;
      font-weight: 900;
    }
  }
  .center {
    flex:1;
    display:flex;
    i {
      width:auto;
      height:0.62rem;
      display: block;
      font-size:0.35rem;
      color:#ccc;
      padding-left:5px;
      padding-right:5px;
      line-height: 0.62rem;
      background:#fff;
      margin-top: 0.12rem;
      border:none;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    input {
      flex:1;
      height:0.62rem;
      margin-top: 0.12rem;
      box-sizing: border-box;
      outline: none;
      margin-left:-2px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border:none;
      font-size:rgb(20, 20, 20);
    }
  }
  .right {
    min-width: 1.04rem;
    font-size:0.25rem;
    line-height: 0.86rem;
    text-align: center;
    color: #fff;
  }
}
</style>
