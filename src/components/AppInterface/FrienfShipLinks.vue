<template>
  <div
    class="panel"
  >
    <div class="panel-body">
      <div id="toolbox-FrienfShipLinks">
        <button
          class="btn btn-primary"
          @click="addLinks()"
        >新增</button>
      </div>
      <v-table
        is-vertical-resize
        :vertical-resize-offset='60'
        is-horizontal-resize
        style="width:100%"
        :multiple-sort="false"
        :min-height="350"
        even-bg-color="#f2f2f2"
        :title-rows="tableConfig.titleRows"
        :columns="tableConfig.columns"
        :table-data="tableConfig.tableData"
        row-hover-color="#eee"
        row-click-color="#edf7ff"
        @sort-change="sortChange"
        :paging-index="(pageIndex-1)*pageSize"
      ></v-table>

      <div class="mt20 mb20 bold">
        <v-pagination
          @page-change="pageChange"
          @page-size-change="pageSizeChange"
          :total="50"
          :page-size="pageSize"
          :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"
        ></v-pagination>
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
export default {
  components:{
    vueUplaoad
  },
  data() {
    return {
      uploadimg:"",
      pageIndex: 1,
      pageSize: 20,
      tableConfig: {
        multipleSort: false,
        tableData: [],
        columns: [
          {
            field: "custome",
            width: 50,
            titleAlign: "center",
            columnAlign: "center",
            formatter: function(rowData, index, pagingIndex) {
              var currentIndex = index + pagingIndex;
              return currentIndex < 3
                ? '<span style="color:red;font-weight: bold;">' +
                    (currentIndex + 1) +
                    "</span>"
                : currentIndex + 1;
            },
            isFrozen: true
          },
          { field: "name", width: 100, columnAlign: "center", isFrozen: true },
          {
            field: "height",
            width: 100,
            columnAlign: "center",
            isFrozen: true
          },
          {
            field: "gender",
            width: 90,
            columnAlign: "center",
            isFrozen: false,
            isResize: true
          },

          { field: "address", width: 280, columnAlign: "left", isResize: true },
          { field: "hobby", width: 180, columnAlign: "center", isResize: true }
        ],
        titleRows: [
          [
            {
              fields: ["custome"],
              title: "排序",
              titleAlign: "center",
              rowspan: 2
            },
            {
              fields: ["name", "height"],
              title: "基础信息",
              titleAlign: "center",
              colspan: 2
            },
            {
              fields: ["gender", "address", "hobby"],
              title:
                "用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;息",
              titleAlign: "center",
              colspan: 3
            }
          ],

          [
            { fields: ["name"], title: "姓名", titleAlign: "center" },
            {
              fields: ["height"],
              title: "身高",
              titleAlign: "center",
              orderBy: ""
            },
            { fields: ["gender"], title: "性别", titleAlign: "center" },
            { fields: ["address"], title: "住址", titleAlign: "center" },
            { fields: ["hobby"], title: "爱好", titleAlign: "center" }
          ],

          [
            {
              fields: ["custome", "name", "height"],
              title: "平均值",
              titleAlign: "center",
              colspan: 3,
              titleCellClassName: "title-cell-class-name-test1"
            },
            {
              fields: ["gender"],
              title: "111",
              titleAlign: "center",
              titleCellClassName: "title-cell-class-name-test2"
            },
            {
              fields: ["address"],
              title: "222",
              titleAlign: "center",
              titleCellClassName: "title-cell-class-name-test2"
            },
            {
              fields: ["hobby"],
              title: "333",
              titleAlign: "center",
              titleCellClassName: "title-cell-class-name-test2"
            }
          ]
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
      this.tableConfig.tableData = tableDate.slice(
        (this.pageIndex - 1) * this.pageSize,
        this.pageIndex * this.pageSize
      );
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
    },
    sortChange(params) {
      if (params.height.length > 0) {
        this.tableConfig.tableData.sort(function(a, b) {
          if (params.height === "asc") {
            return a.height - b.height;
          } else if (params.height === "desc") {
            return b.height - a.height;
          } else {
            return 0;
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
