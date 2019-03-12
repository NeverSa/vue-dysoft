<template>
  <div>
    <div class="toolbox-right btn-group"> <button
        class="Edit btn btn-default"
        title="编辑"
        disabled="disabled"
      ><i class="glyphicon glyphicon-th-list"></i></button><button
        class="Delete btn btn-default"
        title="删除"
        disabled="disabled"
      ><i class="glyphicon glyphicon-trash"></i></button><button
        class="Filt btn btn-default"
        title="筛选"
      ><i class="glyphicon glyphicon-glass"></i></button><button
        class="ShowAll btn btn-default"
        title="清除所有筛选条件,显示全部"
      ><i class="glyphicon glyphicon-book"></i></button><button
        class="Export btn btn-default"
        title="导出筛选后数据"
        hasevent="0"
      ><i class="glyphicon glyphicon-share-alt"></i></button></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>



<style scoped>
</style>
