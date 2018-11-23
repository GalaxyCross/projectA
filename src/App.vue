<template>
  <div id="app">
    <v-top class="top"></v-top>
    <div class="contain">
      <v-left class="left"></v-left>
      <v-right class="right"></v-right>
    </div>
  </div>
</template>

<script>
import top from './components/v-top/v-top.vue';
import left from './components/v-left/v-left.vue';
import right from './components/v-right/v-right.vue';
export default {
  components:{
    vTop:top,
    vLeft:left,
    vRight:right
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import './common/css/index';

#app
  height 100%
  position relative
  .top
    width 100%
    height $top-h
    background-color #aaa
    position fixed
  .contain
    padding-top $top-h
    box-sizing border-box
    height 100%
    display flex
    .left
      width 200px
      height 100%
      left 0
      background #333
    .right
      flex 1
      right 0
</style>
