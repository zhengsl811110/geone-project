<template>
  <div class="esri-widget v-resultView" :class="{underQuickSearch:quickSearchStatus}">
    <header class="header">
      <span class="icon close" @click="closeView"></span>
      <ul><li>搜索结果<span class="list-count">({{allList.length}})</span></li></ul>
    </header>
    <div class="list-group" :style="{maxHeight:maxHeight}">
      <template v-for="(item,index) in pageList">
        <list-item :markerIndex="index"  :item="item" @position="position"></list-item>
      </template>
    </div>
    <footer id="footerPage" v-show="footerVisible"></footer></div>
  </div>
</template>
<script>
  import laypage from 'laypage'
  import listItem from '@/components/vListiIem'
  export default{
    name: 'searchResultView',
    props: {
      map: Object,
      result: Array,
      quickSearchStatus: Boolean
    },
    data(){
      return {
        maxHeight: '300px',
        footerVisible: this.result.length > 10 ? true : false,
        pageList: []
      }
    },
    components: {
      listItem
    },
    watch: {
      result: function () {
        this.pageList = this.result.filterByPageIndex(1);
        this.footerVisible = this.result.length > 10 ? true : false;
        this.layPage();
      }
    },
    mounted(){
      var firstPage = this.result.filterByPageIndex(1);
      this.pageList = firstPage;
      this.showList(firstPage);
    },
    methods: {
      position (item) {
        var _this = this;
        this.map.graphics.graphics.forEach(function (g) {
          if (g.attributes.popup === true && g.attributes.attr.id === item.id) {
//            pubSub.publish('popup.showInfoPopup', {
//              map: _this.map,
//              centerPt: g.attributes.centerPt,
//              res: g.attributes.attr,
//              pan: true
//            });
            return false;
          }
        });
      },
      closeView () {
        this.$events.fire('controlResultView')
      },
      layPage () {
        var _this = this;
        if (_this.footerVisible == true) {
          laypage({
            cont: 'footerPage',
            pages: Math.ceil(_this.result.length / 10),
            curr: 1, //当前页
            first: false,
            last: false,
            jump: function (obj, first) { //触发分页后的回调
              if (!first) {
                _this.map.graphics.clear();
                _this.showList(_this.result.filterByPageIndex(obj.curr));
              }
            }
          });
        }
      },
      showList (res) {
//        this.list = res;
//        pubSub.publish('draw.polygonList', {
//          map: this.map,
//          res: res
//        });
//        pubSub.publish('draw.markerList', {
//          map: this.map,
//          res: res,
//          popup: true,
//          extent: true
//        });
      }
    }
  }
</script>
<style scoped>

</style>
