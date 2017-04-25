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
  position: absolute;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
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
