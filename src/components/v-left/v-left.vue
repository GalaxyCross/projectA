<template>
  <div class="wrapper">
    <router-link to='/homepage'>系统首页</router-link>
    <router-link to='/teachingM'>教学管理</router-link>
    <router-link to='/userM'>用户管理</router-link>
    <router-link to='/deviceM'>设备管理</router-link>
    <router-link to='/resourceM'>资源管理</router-link>
    <router-link to='/fileM'>档案管理</router-link>
    <router-link to='/roleM'>角色管理</router-link>
    <router-link to='/informationM'>信息管理</router-link>
    <router-link to='/systemM'>系统管理</router-link>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  components: {},
  props: {},
  data () {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../../common/css/index';
a
  display:block
  margin-top 20px
  color #fff

</style>
