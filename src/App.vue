<template>
  <div id="app">
    <router-view/>
     
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log($);
  }
};
</script>
<style lang="less" >
.table-header-option{
  display: flex;justify-content: space-between;align-items: center;padding: 10px 0px;
 
}
.floating-container{
    position: absolute;
    right: 0px;
    z-index: 1050;
}
#app {

  img {
    width: 40px;
  }
}
</style>


