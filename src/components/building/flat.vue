<template>
  <button class="flat"><span>{{flatName}}</span></button>
  <!--<div class="flat">
    <span>{{flatName}}</span>
  </div>-->
</template>

<script>
export default {
  name: 'flat',
  props:{
    flatName:String
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .flat{
    height:32px;
    width:66px;
    line-height:32px;
    margin-left:4px;
    border: 0;
    background-color:#23b498;
    cursor: pointer;
    span{
      color:white;
    }
  }
</style>