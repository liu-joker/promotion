<template>
  <div id="app">
    <!-- <lang></lang> -->
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  //  lang
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true;
        });
    }
  }
}
</script>

<style>

#app {
  font-family: ZhenyanGB-Regular, ZhenyanGB;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background: #F8F8F8;
  position: relative;
  z-index: 99;
  text-transform: uppercase;
}
.container {
  margin: 0 auto;
  /* width: 100%; */
}
* {
  margin: 0;
  padding: 0;
}
.el-message {
  top: 200px !important;
  min-width:100px!important;
  color: #fff!important;
  background:rgba(22, 26, 32, 0.6)!important;
}
.el-message--info .el-message__content {
    color: #fff!important;
}
.el-icon-info:before {
    margin-right:0;
    content: ""!important;
}

</style>
