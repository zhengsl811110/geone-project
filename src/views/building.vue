<template>
  <div class="build">
    <div>
      <div class="divider" v-for="item  in maxLength"></div>
    </div>
    <div v-for="(val, key) in buildingList" :key="key" class="row">
      <div class="left">
        <floor :floorNum="key+'楼'"></floor>
      </div>
      <div class="right">
        <flat v-for="floor in val" :flatName="floor.attribute.FlatName" :key="floor.id"></flat>
      </div>
    </div>
  </div>
</template>

<script>
import Flat from '@/components/building/flat';
import Floor from '@/components/building/floor'

export default {
  name: 'buildingtable',
  props: {
    buildingList: Object
  },
  computed: {
    maxLength(){
      let maxFlatLength = 0,
        buildingList = this.buildingList;
      for (var item in buildingList) {
        if (buildingList[item].length >= maxFlatLength) {
          maxFlatLength = buildingList[item].length;
        }
      }
      return  maxFlatLength + 1;
    }
  },
  components: {
    Flat,
    Floor
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@mixin calc($property, $expression) {
  #{$property}: -webkit-calc(#{$expression});
  #{$property}: calc(#{$expression});
}

.build {
  @include calc(height, "100% - 128px");
  overflow: auto;
  padding: 4px;
  .divider {
    float: left;
    height: 2px;
    width: 68px;
    margin-right: 2px;
    background: #555555;
  }
  .row {
    overflow: hidden;
    zoom: 1;
    clear: both;
    .left {
      float: left;
      width: 64px;
      button {
        margin: 4px 0 0 1px;
      }
    }
    .right {
      float: left;
      @include calc(width, "100% - 64px");
      padding: 0 4px;
      text-align: left;
      button {
        margin-top: 4px;
      }
    }
  }
}
</style>