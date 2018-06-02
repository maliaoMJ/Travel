<template>
  <div class="search">
    <input
    class="search-input"
    type="text"
    placeholder="输入城市名或拼音"
    v-model="keyword"
    @input="changeKeyword"
    @blur="hiddenResult"
    />
    <div class="result" v-show="filterShow">
      <ul>
          <li class="result-item border-bottom" v-for="item in filterResult" :key="item.id" @click="$emit('modifyCity', item.name)">{{item.name}}</li>
        <li class="result-item border-bottom center" v-show="!filterResult.length">暂无匹配结果</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  props: {
    cityData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      keyword: '',
      cityFilterList: [],
      filterResult: [],
      filterShow: false
    }
  },
  methods: {
    filterCitys: function (keyword = '') {
      if (this.cityData.cities) {
        for (let key in this.cityData.cities) {
          this.cityFilterList = this.cityFilterList.concat(this.cityData.cities[key])
        }
        for (let i = 0; i < this.cityFilterList.length; i++) {
          if (this.cityFilterList[i].name.indexOf(keyword) > -1 || this.cityFilterList[i].spell.indexOf(keyword) > -1) {
            this.filterResult.push(this.cityFilterList[i])
          }
        }
      }
    },
    changeKeyword: function (e) {
      this.filterResult = []
      this.cityFilterList = []
      if (!e.target.value) {
        this.filterShow = false
        return false
      }
      this.filterCitys(e.target.value)
      this.filterShow = true
    },
    hiddenResult: function () {
      this.filterShow = false
    }

  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.search{
  width:100%;
  padding:0.1rem;
  background-color:#e5eaeb;
  font-size:0;
  margin:0px;
  box-sizing: border-box;
  .search-input{
    margin:0;
    padding:0px;
    box-sizing: border-box;
    width: 100%;
    height: .62rem;
    padding: 0 .1rem;
    line-height: .62rem;
    text-align: center;
    border-radius: .06rem;
    color: #666;
    outline: none;
    border:none;
    letter-spacing: 1px;
    margin-bottom: 0.1rem;
  }
  .result{
    position: absolute;
    top:1.58rem;
    bottom:0;
    left:0;
    right:0;
    z-index: 10;
    height:auto;
    font-size:0.3rem;
    width:100%;
    background:#fff;
    color:#999;
    overflow: auto;
    li{
      line-height: 0.64rem;
      padding-left: 0.2rem;
      &.center{
          text-align: center;
      }
    }
  }
}
</style>
