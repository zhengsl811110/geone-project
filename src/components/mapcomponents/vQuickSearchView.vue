<template>
  <div class="esri-widget v-quickSearchView">
    <el-input placeholder="请输入内容" v-model="val" @keyup.enter="search">
      <el-select v-model="name" slot="prepend" placeholder="请选择" @change="change" class="q-select">
        <el-option v-for="item in searchList" :key="item.name" :label="item.name" :value="item.name"></el-option>
      </el-select>
      <el-button slot="append" icon="search" @click="search"></el-button>
    </el-input>
    <!--<span class="loading" v-if="rotating"></span>-->
  </div>
</template>
<script>
  import server from '@/server'
  export default{
    name: 'quickSearchView',
    props: {
      map: Object,
      serviceUrl: String
    },
    data(){
      return {
        rotating: false,
        name: '',
        searchList: [],
        val: '',
        url: ''
      }
    },
    mounted(){
      var _this = this;
      server.get({url: this.serviceUrl}).then(function (res) {
        _this.searchList = res.data;
        if(res.data.length>0){
          _this.name=res.data[0].name;
          _this.val=res.data[0].defaultValue;
          _this.url=res.data[0].url;
        }
      });
    },
    methods: {
      change() {
        var obj = this.searchList.findByName(this.name);
        this.val = obj.defaultValue;
        this.url = obj.url;
      },
      search: function () {
        var _this = this;
        this.rotating = true;
      }
    }
  }
</script>
<style>
  .v-quickSearchView {
    left: 55px;
    width: 420px;
    background: white;
  }
  .v-quickSearchView .q-select{
    width: 100px;
  }
  .v-quickSearchView .el-input-group__append, .el-input-group__prepend {
    background-color: white;
    color: black;
    border-radius: 0 ;
    border: 1px solid #0593d3;
  }
  .v-quickSearchView  .el-input-group__prepend .el-input>i {
    color: #0593d3;
  }
  .v-quickSearchView .el-input__inner{
    border: 1px solid #0593d3;
    border-left: 0;
    border-right: 0;
  }
  .v-quickSearchView .el-input-group__append>button {
    background: #0593d3;
    color: white;
    border-radius: 0;
  }
</style>
