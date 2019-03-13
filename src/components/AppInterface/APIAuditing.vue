
<template>

  <div class="panel">
    <div class="panel-body form-horizontal">
      <div class="bord-btm mar-btm">
        <div class="Dytablelist">
          <dl>
            <dt>API分类</dt>
            <dd>
              <div class="badge-span" v-for="(item,index) in apiClassList">
                <span class="badge " :class="{'badge-info':curIndex==index}" @click="clickApiClass(index)">{{item.text}}</span>
              </div>
             
            </dd>
          </dl>
        </div>
        <div class="form-group" style="display: block;">
          <div class="searchbox pull-left" >
            <div class="input-group custom-search-form" >
              <input class="form-control" ng-model="searchKey" placeholder="搜索.." type="text">
              <span class="input-group-btn">
                <button class="text-muted" type="button" @click="searchData()"><i class="ti-search"></i></button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row">
          <div class="col-sm-3 pos-rel" v-for="item in funDataList">
            <div class="resultcol bord-all" @click="lookDetail(item.DataFunClassId)">
              <label>{{item.apiClassFyName}}</label>
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552390144816&di=470918c48bdbe95e717614ab1abd0ab6&imgtype=0&src=http%3A%2F%2Fphotos.tuchong.com%2F316540%2Ff%2F6406791.jpg" />
              <h4 class="bord-btm text-center">
                [{{item.DataFunCode}}]{{item.DataFunName}}
              </h4>
              <div class="list-group bord-no">
                <div class="list-group-item list-item-sm ion-funnel">
                  <span>未审核（<a class="text-primary">{{item.NotAduitCount}}</a>）</span>
                  <span>审核通过（<a class="text-primary">{{item.AduitPassedCount}}</a>）</span>
                </div>
                <div class="list-group-item list-item-sm ion-alert-circled">
                  <span>审核不通过（<a class="text-primary">{{item.AduitNotPassedCount}}</a>）</span>
                </div>
                <div class="list-group-item list-item-sm ion-paper-airplane">
                  <span>未发布（<a class="text-primary">{{item.NotPublishedCount}}</a>）</span>
                  <span>已发布（<a class="text-primary">{{item.PublishedCount}}</a>）</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="pageContain">
      </div>
    </div>
    <div class="modal fade" id="addtypename-modal" role="dialog" aria-labelledby="demo-default-modal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>
            <h4 class="modal-title">API分类编辑</h4>
          </div>
          <div class="modal-body">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-4">分类名称:</label>
                <div class="col-md-6">
                  <input type="text" class="form-control" ng-model="apiType.ClassifyName">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-4">是否开启:</label>
                <div class="col-md-6">
                  <div style="margin-top:5px">
                    <label class="toggle-switch">
                      <input type="checkbox" checked />
                      <span class="toggle-switch-icon"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="form-group">
              <div class="text-center ">
                <button type="button" class="btn btn-primary" ng-click="saveApiClass()">保存</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="editApiClass">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>
            <h4 class="modal-title">API分类编辑</h4>
          </div>
          <div id="position" class="modal-body">
            <draggable element="ul" v-model="list">
              <li class="ion-arrow-move " v-for="item in list">
                <span class="menudetail"><input type="text" class="form-control"></span>
                <span class="menudetail">
                  <label class="toggle-switch">
                    <input type="checkbox" v-model="item.id" />
                    <span class="toggle-switch-icon"></span>
                  </label>
                </span>
                <span class="menudetail">
                  <button type="button" class="btn btn-primary" ng-click="saveApiClassNew(item)">保存</button>
                  <button type="button" class="btn btn-primary" @click="deleteApiClassNew(item.id)">删除</button>
                </span>
                <span>
                  <i class="glyphicon glyphicon-move"></i>
                </span>
              </li>
            </draggable>
            <button style="margin-left:42%;" class="btn btn-primary" ng-click="saveApiClassPosition()">保存排序</button>

          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      curIndex: 1,
      funDataList: [
        {
          AduitNotPassedCount: 0,
          AduitPassedCount: 2,
          DataFunClassId: "477a7308-aa28-4698-a6d6-7bc0d2787c56",
          DataFunCode: "180109113519",
          DataFunName: "教师相关信息",
          ImgUrl: "",
          NotAduitCount: 0,
          NotOpenCount: 0,
          NotPublishedCount: 0,
          OpenedCount: 2,
          PublishedCount: 2,
          apiClassFyName: "中职院校信息"
        }
      ],

      apiClassList: [{ id: 1, text: "全部" }, { id: 2, text: "教育机构信息" }],
      list: [
        {
          id: 1,
          name: "a"
        },
        {
          id: 2,
          name: "b"
        },
        {
          id: 3,
          name: "c"
        },
        {
          id: 4,
          name: "d"
        },
        {
          id: 5,
          name: "e"
        },
        {
          id: 6,
          name: "f"
        }
      ]
    };
  },
  components: {
    //调用组件
    draggable
  },
  created() {},
  mounted() {},
  methods: {
    lookDetail(id) {
      this.$router.push({ name: "APIAuditingDetail", query: { id: id } });
    },
    deleteApiClassNew(id) {
      this.$u.confirm("确定删除该功能分类吗？", function(r) {});
    },
    clickApiClass(index) {
      this.curIndex = index;
    },
  
    searchData() {
      alert("搜索");
    }
  }
};
</script>
<style lang="less" scoped>
</style>
