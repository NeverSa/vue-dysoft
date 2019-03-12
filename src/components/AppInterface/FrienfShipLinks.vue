<template>
  <div
    class="panel"
  >
    <div class="panel-body">
      <div id="toolbox-FrienfShipLinks" class="table-header-option">
        <button
          class="btn btn-primary"
          @click="addLinks()"
        >新增</button>
            <vueTableOption></vueTableOption>
      </div>
  
      <v-table 
            is-horizontal-resize
            style="width:100%"
            :columns="tableConfig.columns" 
            :table-data="tableConfig.tableData" 
            :paging-index="(pageIndex-1)*pageSize">
        </v-table>


      <div class="mt20 mb20 bold">
       <v-pagination 
            @page-change="pageChange" 
            @page-size-change="pageSizeChange" 
            :total="total" :page-size="pageSize" 
            :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']">
        </v-pagination>

      </div>

    </div>
  
    <div class="modal fade" id="Cls-modal">
      <div
        class="modal-dialog"
        style="width: 400px;"
      >
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
            ><i class="pci-cross pci-circle"></i></button>
            <h4 class="modal-title">项目类别编辑</h4>
          </div>
          <div class="modal-body ">
            <div
              class="Dytablelist"
              style="margin:0 auto;"
            >
              <dl>
                <dt>链接地址</dt>
                <dd>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="http://www.zjdykj.com/"
                  />
                </dd>
              </dl>
              <dl>
                <dt>链接名称</dt>
                <dd>
                  <input
                    type="text"
                    class="form-control"
                    ng-model="name"
                    placeholder="鼎永科技"
                  />
                </dd>
              </dl>
            </div>
            <div class="text-center">
              <div>
                <a class="btn-link" @click="showUpload()">图标上传</a>
              </div>
              <div><img :src="uploadimg" alt=""></div>
            </div>
            <div class="text-center">
              <img style="max-width:100%;" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="text-center ">
              <button
              @click="submit()"
                type="button"
                class="btn btn-primary"
              >提交</button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <vueUplaoad ref="vueUplaoad" @completUpload="completUpload"></vueUplaoad>
  </div>
</template>

<script>
import vueUplaoad from "@/component_pack/uploadImg"
import vueTableOption from "@/component_pack/tableOption"
export default {
  components:{
    vueUplaoad,
    vueTableOption
  },
  data() {
    return {
      uploadimg:"",
      pageIndex: 1,
      pageSize: 20,
      tableDate:[{'id':'11','name':'小白','age':'12','height':'116','sex':'男','score':'81'},
    {'id':'12','name':'小黑','age':'12','height':'118','sex':'男','score':'88'},
    {'id':'13','name':'小海','age':'12','height':'125','sex':'男','score':'83'},
    {'id':'14','name':'小金','age':'12','height':'129','sex':'男','score':'82'},
    {'id':'15','name':'小路','age':'12','height':'127','sex':'女','score':'72'},
    {'id':'16','name':'小龙','age':'12','height':'125','sex':'男','score':'96'},
    {'id':'17','name':'小蓝','age':'12','height':'118','sex':'女','score':'93'},
    {'id':'18','name':'小兰','age':'12','height':'124','sex':'女','score':'71'},
    {'id':'19','name':'小高','age':'12','height':'116','sex':'女','score':'79'},
    {'id':'20','name':'小国','age':'12','height':'130','sex':'男','score':'68'}],
    tableConfig: {
                tableData: [],
                columns: [
                    {
                        field: "id",
                        title: "编号",
                        width: 50,
                        columnAlign: "center",
                        isResize :true,
                    },
                    {
                        field: "name",
                        title: "姓名",
                        width: 120,
                        columnAlign: "center",
                        isResize :true,
                    },
                    {
                        field: "age",
                        title: "年龄",
                        width: 50,
                        columnAlign: "center",
                        isResize :true,
                    },
 
                    {
                        field: "height",
                        title: "身高",
                        width: 100,
                        columnAlign: "left",
                        isResize :true,
                    },
                    {
                        field: "sex",
                        title: "性别",
                        width: 50,
                        columnAlign: "center",
                        isResize :true,
                    },
                    {
                        field: "score",
                        title: "成绩",
                        width: 80,
                        columnAlign: "center",
                        isResize :true,
                    }
                ]
            }
    };
  },
  created() {
    this.getTableData();
  },
  mounted() {},
  methods: {
    submit(){
      this.$u.info("asdadad")
    },
    //保存以及base64的回调
    completUpload(data){
      this.uploadimg=data;
      this.$refs.vueUplaoad.toggle()
    },
    showUpload(){
      this.$refs.vueUplaoad.toggle()
    },
    addLinks() {
      $("#Cls-modal").modal({
        keyboard: false,
        backdrop: "static"
      });
    },
  getTableData() {
            this.tableConfig.tableData = this.tableDate.slice(
                (this.pageIndex - 1) * this.pageSize,
                this.pageIndex * this.pageSize
            );
            this.total = tableDate.length;
        },
        pageChange(pageIndex) {
            this.pageIndex = pageIndex;
            this.getTableData();
            console.log(pageIndex);
        },
        pageSizeChange(pageSize) {
            this.pageIndex = 1;
            this.pageSize = pageSize;
            this.getTableData();
        }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
