<template>
  <div class="app-viewport">
    <md-button class="md-raised md-accent" @click.native="toggleRightSidenav">Toggle right</md-button>
    <iframe frameborder="0" class="iframe" src="http://192.168.84.23/maptest/"></iframe>
    <md-sidenav class="md-right" ref="rightSidenav">
      <md-toolbar >
        <div class="md-toolbar-container">
          <h3 class="md-title">楼盘表</h3>
          <span style="flex: 1"></span>
          <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
            <md-icon>close</md-icon>
          </md-button>
        </div>
      </md-toolbar>
      <md-button class="md-raised md-accent" @click.native="closeRightSidenav">Close</md-button>
    </md-sidenav>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      toggleRightSidenav() {
        this.$refs.rightSidenav.toggle();
      },
      closeRightSidenav() {
        this.$refs.rightSidenav.close();
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
  .app-viewport {
    height: 100%;
    width: 100%;
    .iframe {
      height: 100% !important;
      width: 100%;
    }
    .md-raised {
      position: absolute;
      z-index: 999999;
    }
    .md-sidenav {
      .md-sidenav-backdrop {
        display: none !important;
      }
    }
  }
</style>