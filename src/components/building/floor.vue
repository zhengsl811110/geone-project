<template>
  <button class="floor"><span>{{floorNum}}</span></button>
</template>

<script>
export default {
  name: 'floor',
  props:{
    floorNum:String
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .floor{
    height:32px;
    width:66px;
    line-height:32px;
    border: 0;
    background-color:#666666;
    span{
      color:white;
    }
  }
</style>