<template>
  <div class='list-group-item'　@click='position(item)'>
    <div class='row'>
      <div class='list-header'>
        <span class='marker-Icon' :class='marker$(markerIndex)'></span>
        <span class='title'>{{item.name}}</span>
      </div>
    </div>
    <div class='row' v-for='(val,key) in item.showlist'>
      <template v-if='valid$(key)'>
        <span class='col-xs-4'>{{key}}：</span>
        <span class='col-xs-8'>{{val}}</span>
      </template>" +
      <template v-else>
        <span class='col-xs-4'>{{splitKey$(key)}}：</span>
        <span class='col-xs-8'>{{val}} {{splitVal$(key)}}</span>
      </template>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'list-item',
    methods: {
      valid$(key) {
        return key.indexOf('$') == -1;
      },
      splitKey$(key) {
        return key.split('$')[0]
      },
      splitVal$(key) {
        return key.split('$')[1]
      },
      marker$(index) {
        return 'marker' + (index + 1).toString();
      },
      position(item) {
        this.$emit('position', item);
      }
    }
  }
</script>
