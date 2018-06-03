<template>
  <div class="gallary" @click="$emit('close')">
      gallary
  </div>
</template>
<script>
export default {
  name: 'Gallary'
}
</script>
<style lang="less" scoped>
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
}
</style>
