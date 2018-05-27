<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of weekendData"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    weekendData: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .title{
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
    font-size:0.32rem;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    background:#fff;
    .item-img{
      width: 100%;
    }
  }
  .item-info{
    padding: .1rem;
    background:#fff;
    .item-title{
      line-height: .54rem;
      font-size: .32rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      overflow: hidden;
    }
    .item-desc{
      line-height: .4rem;
      color: #ccc;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      overflow: hidden;
      font-size:0.25rem;
    }
  }
</style>
