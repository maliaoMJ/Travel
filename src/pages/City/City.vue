<template>
    <div class="city-page">
        <header>
          <i class="fa fa-angle-left" @click="goback"></i>
          <h3>城市选择</h3>
        </header>
        <city-search :cityData="cityData" @modifyCity="modifyCurrentCity"></city-search>
        <alphabet :AlphabetData="AlphabetData" @change="handleChange"></alphabet>
        <city-list :cityData="cityData" :AlphabetStr="AlphabetStr" :currentCity="currentCity" @modifyCity="modifyCurrentCity"></city-list>
    </div>
</template>
<script>
import CitySearch from '@/components/CitySearch/CitySearch'
import CityList from '@/components/CityList/CityList'
import Alphabet from '@/components/Alphabet/Alphabet'
import cityDatas from '@/mock/city.json'
export default {
  name: 'City',
  components: {
    CitySearch,
    CityList,
    Alphabet
  },
  data () {
    return {
      cityData: {},
      AlphabetData: [],
      AlphabetStr: ''
    }
  },
  computed: {
    currentCity () {
      return this.$store.getters.getCurrentCity
    }
  },
  methods: {
    goback: function () {
      this.$router.back()
    },
    handleChange: function (data) {
      this.AlphabetStr = data
    },
    modifyCurrentCity (currentCityName) {
      this.$store.commit('setCurrentCity', currentCityName)
      this.$router.push('/')
    }
  },
  mounted () {
    this.cityData = cityDatas.data
    // 此处应该使用计算属性，不应该这么写
    for (let key in this.cityData.cities) {
      this.AlphabetData.push(key)
    }
  },
  watch: {
    AlphabetStr (oldValue, newValue) {
      if (!newValue) return false
    }
  }
}
</script>
<style lang="less" scoped>
.city-page{
    width:100%;
    height:100%;
    position:relative;
    header{
      display: flex;
      flex-direction: row;
      background-color: #17a4bd;
      color:#fff;
      width:100%;
      height:0.72rem;
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
}
</style>
