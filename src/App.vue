<script src="main.js"></script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
    font-size: 12px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  /**chrome scroll**/
  ::-webkit-scrollbar{width:4px;height:8px}
  ::-webkit-scrollbar-button:vertical{display:none}
  ::-webkit-scrollbar-track:vertical{background-color:#000}
  ::-webkit-scrollbar-track-piece{background-color:#F5F5F5}
  ::-webkit-scrollbar-thumb:vertical{margin-right:10px;background-color:#999}
  ::-webkit-scrollbar-thumb:vertical:hover{background-color:#666}
  ::-webkit-scrollbar-corner:vertical{background-color:#535353}
  ::-webkit-scrollbar-resizer:vertical{background-color:#FF6E00}
</style>
