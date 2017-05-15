<template>
  <div class="app-viewport">
    <map-view :id="'map'" v-if="mapView.show" :extent="mapView.extent" :spatialReference="mapView.spatialReference" @initComplete="initComplete"></map-view>
    <base-map-bar-view v-if="baseMap.show" :map="map" :baseMapList="baseMap.baseMapList" class="my-top-right"></base-map-bar-view>
    <tools-bar-view v-if="toolsBar.show" :map="map" :serviceUrl="toolsBar.serviceUrl" class="my-top-left"></tools-bar-view>
    <copy-right-view v-if="copyRight.show" :label="copyRight.label" class="my-right-bottom"></copy-right-view>
    <legend-view v-if="legend.show" :url="legend.url" class="my-left-bottom"></legend-view>
    <quick-search-view v-if="quickSeach.show" :map="map" :serviceUrl="quickSeach.serviceUrl" class="my-top-left"></quick-search-view>
  </div>
</template>

<script>

import gTokenM from '@/mapapi/GTokenM'
import server from '@/server'

import mapView from '@/components/mapcomponents/vMapView';
import baseMapBarView from '@/components/mapcomponents/vBaseMapBarView';
import copyRightView from '@/components/mapcomponents/vCopyRightView';
import legendView from '@/components/mapcomponents/vLegendView';
import toolsBarView from '@/components/mapcomponents/vToolsBarView';
import quickSearchView from '@/components/mapcomponents/vQuickSearchView';

export default {
  name: 'main',
  events: {
    controlLegend(arg){
      this.legend.show = arg.show;
      this.legend.src = arg.src;
    },
    showResult(arg){
      if (this.searchResult.show == false) {
        this.searchResult.show = true;
      }
      this.searchResult.result = arg.data;
    },
    controlResultView(){
      this.searchResult.show = false;
    }
  },
  data() {
    return {
      map: null,
      mapView: {
        show: false,
        extent: '',
        spatialReference: '',
      },
      baseMap: {
        show: false,
        baseMapList: []
      },
      toolsBar: {
        show: false,
        serviceUrl:''
      },
      copyRight: {
        show: false,
        label: ''
      },
      legend: {
        show: false,
        src: ''
      },
      quickSeach: {
        show: false,
        serviceUrl: ''
      },
      searchResult: {
        show: false,
        data: []
      }
    }
  },
  components: {
    mapView,
    baseMapBarView,
    copyRightView,
    toolsBarView,
    legendView,
    quickSearchView
  },
  mounted() {
    var _this = this;
    this.refreshPage();
    var mapView = window.OneMap.modules.findByName('mapView');
    if (mapView === null) {
      console.error('请配置mapView模块');
      return false;
    }
    server.get({ url: mapView.serviceUrl }).then(function (res) {
      _this.mapView.extent = res.data.defaultMapExtent;
      _this.mapView.spatialReference = res.data.spatialReference;
      _this.mapView.show = true;//开始渲染mapview
      _this.baseMap.baseMapList = res.data.baseMap;
      gTokenM.setTokens(res.data.token);
    });
  },
  methods: {
    refreshPage() {
      var dataLogin = sessionStorage.getItem('data-login');
      if (dataLogin != null) {
        var res = JSON.parse(dataLogin);
        window.OneMap.services = res.data.services;
        window.OneMap.modules = res.data.modules;
      }
    },
    initComplete(map) {
      window.OneMap.map = map;
      this.map = map;
      this.iniMapLayer();
      this.initCopyRight();
      this.initToolsBar();
      this.initQuickSearch();
    },
    iniMapLayer() {
      if (window.OneMap.modules.findByName('mapLayer') instanceof Object) {
        this.baseMap.baseMapList.push({
          id: 'layerView',
          name: 'layerView',
          label: '图层',
          icon: 'esri-icon-layers'
        });
      }
      this.baseMap.show = true;
    },
    initCopyRight() {
      var _this = this,
        copyRight = window.OneMap.modules.findByName('copyRight');
      if (copyRight != null) {
        _this.copyRight.label = copyRight.config || '苏州工业园区格网信息科技有限公司';
        _this.copyRight.show = true;
      }
    },
    initToolsBar() {
      var _this = this,
        toolsBar = window.OneMap.modules.findByName('toolsBar');
      if (toolsBar != null) {
        _this.toolsBar.serviceUrl=toolsBar.serviceUrl;
        _this.toolsBar.show = true;
      }
    },
    initQuickSearch(){
      var _this = this,
//        quickSearch = window.OneMap.modules.findByName('quickSearch');
        quickSearch = window.OneMap.modules.findByName('quickQuery');
      if (quickSearch != null) {
        _this.quickSeach.serviceUrl = quickSearch.serviceUrl;
        _this.quickSeach.show = true;
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url('http://58.210.9.131/js_arcgis_api/3.20/esri/css/esri.css');
@import url('../assets/css/map.master.css');
.app-viewport {
  height: 100%;
  width: 100%;
}
</style>
