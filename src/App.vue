<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
*{
  padding:0px;
  margin:0px;
}
#app {
 width:100%;
 height:100%;
 max-height:812px;
 max-width: 414px;
 position:absolute;
 top:0;
 left:0;
 right:0;
 bottom:0;
 margin:auto;
 background:#eee;
}
</style>
