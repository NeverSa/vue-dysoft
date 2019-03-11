
<template>
  <div>
    <div id="page-title">
      <h1 class="page-header text-overflow">{{title}}</h1>
    </div>
    <div class="nav">
        <div> {{title}}</div>
        <i class="glyphicon glyphicon-menu-right"></i>
        <div class="active"> {{secndtitle}}</div>
    </div>
  </div>

</template>

<script>
export default {
  name: "App",
  props:['nav'],
  data(){
      return {
          title:"",
          secndtitle:"",
      }
  },
  created() {
        for (const iterator of  this.nav) {
            if(!iterator.header){
                 this.title=iterator.name;
                  iterator.children.forEach(element => {
                         this.secndtitle=element.name;
                 });
                 return false;
            }
         }
  },
  methods:{
       updatatitle(){
          for (const iterator of  this.nav) {
            if(!iterator.header&&iterator.isSubShow){
                 this.title=iterator.name;
                 iterator.children.forEach(element => {
                       if(element.isSubShow){
                         this.secndtitle=element.name;
                     }
                 });
                 return false;
            }
         
         }
  },
  }
};
</script>
<style lang="less" scoped>
.nav{
    display: flex;
    padding: 15px;
    .active{
        color:#4883e0;
    }
}
</style>
