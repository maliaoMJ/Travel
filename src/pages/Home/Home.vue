<template>
    <div class="homePage">
        <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader/HomeHeader'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
<style lang="less" scoped>
.homePage{
  width:100%;
  height:100%;
}
</style>
