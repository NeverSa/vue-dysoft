<template>
  <div id="container" class="mainnav-lg effect aside-fixed aside-float aside-bright">

 
  

  
    
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

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.edit_btn {
  font-size: 12px;
  padding: 0 10px;
  cursor: pointer;
  line-height: 30px;
}

.edit_dropdown {
  left: 0;
  right: 44px;
}

.edit_dropdown_input .input-group-btn span {
  z-index: 10;
  position: absolute;
  left: 100%;
  top: 0;
  bottom: 0;
}

.edit_dropdown {
  left: -139px;
  position: absolute;
}

.edit_dropdown .form-control {
  border-color: #42a5f5 !important;
  width: 139px;
}

.dropdown-menu {
  min-width: 120px;
}
.dyverborder {
  position: relative;
  overflow: hidden;
}

.dyverborder:after {
  position: absolute;
  content: "";
  top: 0px;
  bottom: 0px;
  width: 1px;
  background: #d3d3d3;
  left: 16.66666667%;
}

.ztree * {
  font-size: 14px;
}

.ztree li a:hover {
  text-decoration: none;
}

.ztree li a:hover .node_name {
  text-decoration: underline;
}

#sortable {
  display: none;
}

.sortable_ul li {
  cursor: pointer;
  margin: 6px 0;
  padding: 4px;
  background-color: #f5f6f8;
}

#addOrg,
#addSchool,
#edit_btn {
  display: none;
}

#toolbox-AdminMessage #initAdmin {
  display: none;
}

#groupTeaTree .dropdown-menu {
  z-index: 10;
  position: relative;
}

.zms_tag {
  line-height: 14px;
  margin-bottom: 5px;
  padding: 3px 4px;
  font-size: 12px;
  color: #fff;
  display: inline-block;
  margin: 5px 2px 0;
}

.zms_tag .fa-remove {
  cursor: pointer;
}

.dysoft-progress-nodelay div.progress-bar {
  transition: none;
}

.bind_panel {
  position: absolute;
  width: 200px;
  z-index: 100;
  margin-top: 40px;
  margin-left: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  display: none;
}

.bind_box {
  height: 250px;
  width: 100%;
  overflow: auto;
  border: 1px solid #ddd;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
