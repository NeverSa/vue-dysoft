<template>
  <div class="panel">
    <div class="panel-heading" id="main_head">
      <h4 class="panel-title">
        数据接口编辑
      </h4>
      <div class="float-r dy-head-control">
        <button class="btn btn-default btn-sm ion-arrow-return-left" id="back"> 返回</button>
      </div>

    </div>
    <div class="panel-heading" id="prestep_head" style="display: none;">
      <div class="float-r dy-head-control">
        <button class="btn btn-default btn-sm ion-arrow-return-left" id="prestep"> 上一步</button>
      </div>
      <h4 class="panel-title">
        数据接口编辑
      </h4>
    </div>
    <div id="mainpanel">
      <div div class="panel-body ">

       

        <div class="form-group pos-rel">
          <div class="row">
            <div class="col-sm-2 pad-no text-center">
              <img class="apiimg" :src="dataFunObj.ImgUrl" />
            </div>
            <div class="col-sm-8 pos-rel">
              <p class="text-main text-bold">
                数据名称：{{dataFunObj.Name}}
              </p>
              <p class="ovauto">
                接入服务商：{{dataFunObj.AccessServiceProvider}}
              </p>
              <p class="ovauto">
                <span class="mar-rgt">数据id：{{dataFunObj.DataCode}}</span>
                <span class="mar-rgt">创建时间：{{dataFunObj.CreateTime}}</span>
                <span class="mar-rgt">创建用户：{{dataFunObj.CreateUserName}}</span>
              </p>
            </div>
            <div class="col-sm-2 text-center">

              <div class="mar-btm">
                <button class="btn btn-default btn-sm" id="apitest">接口测试</button>
              </div>
              <div class="mar-btm">
                <button class="btn btn-default btn-sm" id="apicount">请求统计</button>
              </div>
              <div class="mar-btm">
                <button id="audbtn" class="btn btn-primary btn-sm" @click="showslideToggle()">数据接口审核</button>
              </div>

               <div id="audsubmitpanel" class="panel pos-abs bg-gray-light" style="top: 160px;right: 0;z-index: 100;display: none;width:460px;border: 1px solid #42a5f5;max-height: 	60vh;overflow: auto;">
          <div class="panel-body form-horizontal form-padding pos-rel">
            <button class="close" id="audsubmitclose" type="button" @click="showslideToggle()"><i class="pci-cross pci-circle"></i></button>
            <div class="form-group">
              <label class="control-label">历史审核记录</label>
              <div class="hisrecord_wrap">
                <ul>
                  <li ng-repeat="item in AuditLogList">
                    <span>123123</span>
                    <span ng-if="item.Bak">asd: 原因 :
                      <a title="asd" style="width:90%;overflow:hidden; 
										   text-overflow:ellipsis;display: block;white-space: nowrap;">123</a>
                    </span>
                    <span ng-if="!item.Bak">12313</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label" for="demo-email-input">本次审核</label>
              <div>
                <div class="fixed-table-container" style="padding-bottom: 0px;">
                  <div class="fixed-table-body">
                    <table class="table table-hover mytable">
                      <thead>
                        <tr>
                          <th class="bs-checkbox">
                            <div class="th-inner ">
                              <input class="magic-checkbox" type="checkbox" ng-model="checkall" ng-click="checkAll()">
                              <label></label>
                            </div>
                          </th>
                          <th>
                            <div class="th-inner sortable">接口名称</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr ng-repeat="item in apiList">
                          <td class="bs-checkbox">
                            <input class="magic-checkbox" type="checkbox" ng-model="item.checked" ng-click="checkApi()">
                            <label></label>
                          </td>
                          <td>2131232</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
            <div class="form-group">
              <div class="radio">
                <input id="demo-inline-form-radio" class="magic-radio" type="radio" name="inline-form-radio" value="true">
                <label for="demo-inline-form-radio">审核通过</label>

                <input id="demo-inline-form-radio-2" class="magic-radio" type="radio" name="inline-form-radio" value="false">
                <label for="demo-inline-form-radio-2">审核不通过</label>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label">审核不通过原因</label>
              <div>
                <textarea id="demo-textarea-input" rows="6" class="form-control" ng-model="remarks"></textarea>
              </div>
            </div>
          </div>
          <div class="panel-footer text-center">
            <button class="btn btn-primary" ng-click="saveAuditData()">提交</button>
          </div>
        </div>
            </div>
          </div>
        </div>
        <div class="tab-base Dytab">

          <!-- Nav tabs -->
          <ul class="nav nav-tabs">
            <li class="active">
              <a name="API" data-toggle="tab" href="#API">API</a>
            </li>
            <li>
              <a name="Errorcode" data-toggle="tab" href="#Errorcode">错误码参照</a>
            </li>
            <li>
              <a name="Excode" data-toggle="tab" href="#Excode">示例代码</a>
            </li>
          </ul>

          <!-- Tabs Content -->
          <div class="form-horizontal">
            <div class="tab-content bord-all">
              <!-- tab1 -->
              <div class="tab-pane fade active in" id="API">
                <!-- 展示 -->
                <div class="panel" v-show="editortext">
                  <div class="apishow">
                    <div class="row mar-no">
                      <div class="col-xs-3 pad-no">
                        <div class="list-group bord-no">
                          <div class="list-group-item " v-for="(item,index) in listDataSet" :class="{'active':editselsctid==item.ID}" @click="editselsctid=item.ID">
                            <span>{{item.Name}}</span>
                            <span v-show="item.PublishStatus==6" style="float:right;color:forestgreen;">已发布</span>
                            <span v-show="item.PublishStatus!=6" style="float:right;color:peru;">未发布</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-9 bord-lft ">
                        <div class="panel">
                          <div class="panel-heading">
                            <h3 class="panel-title">基础信息</h3>
                            <div class="panel-control">
                              <button class="btn btn-default" data-target="#panel1" data-toggle="collapse" aria-expanded="true"><i class="glyphicon glyphicon-chevron-down"></i></button>
                            </div>
                          </div>
                          <div id="panel1" class="collapse " aria-expanded="true" style="">
                            <div class="panel-body">
                              <div class="form-group"><span class="mar-rgt ng-binding">审核状态：审核通过</span> <span class="mar-rgt ng-binding">发布状态：发布</span> <span class="mar-rgt ng-binding">创建时间：2018-01-09 17:40:37</span></div>
                              <div class="form-group"><span class="mar-rgt">实际接口地址：</span> <span class="mar-rgt ng-binding">http://dataApi.fyedu.org/VocationalTeacher/GetVocationalTeacherInfo</span></div>
                              <div class="form-group"><span class="mar-rgt">代理接口地址：</span> <span class="mar-rgt ng-binding">http://apiApi.fyedu.org/Agent/6333213f-482c-43b9-90a8-43c7fc948f85</span></div>
                              <div class="form-group"><span class="mar-rgt">是否支持增量：</span> <span class="mar-rgt switchbox ng-isolate-scope" onclick="return false;" dy-switch="baseDataSet.IsSupportVersion"><label class="toggle-switch"> <input type="checkbox" ng-model="dySwitch" class="ng-pristine ng-untouched ng-valid ng-empty"> <span class="toggle-switch-icon"></span> </label></span> <span ng-show="baseDataSet.IsSupportVersion" class="mar-rgt ng-binding ng-hide">唯一关联表：</span></div>
                            </div>
                          </div>
                        </div>

                        <div class="panel">
                          <div class="panel-heading">
                            <h3 class="panel-title">限制条件</h3>
                            <div class="panel-control">
                              <button class="btn btn-default" data-target="#panel2" data-toggle="collapse" aria-expanded="true"><i class="glyphicon glyphicon-chevron-down"></i></button>
                            </div>
                          </div>
                          <div id="panel2" class="collapse " aria-expanded="true" style="">
                            <div class="panel-body">
                              <form class="form-horizontal form-padding">
                                <div class="form-group pad-ver">
                                  <div class="col-md-9">
                                    <div class="radio">
                                      <!-- Inline radio buttons -->
                                      <input id="demo-inline-form-radio" class="magic-checkbox" type="checkbox" name="inline-form-radio" checked="" disabled>
                                      <label for="demo-inline-form-radio">是否开放数据</label>

                                      <input id="demo-inline-form-radio-2" class="magic-checkbox" type="checkbox" name="inline-form-radio" disabled>
                                      <label for="demo-inline-form-radio-2">是否需要认证</label>

                                      <input id="demo-inline-form-radio-3" class="magic-checkbox" type="checkbox" name="inline-form-radio" disabled>
                                      <label for="demo-inline-form-radio-3">是否限制数据范围</label>

                                    </div>
                                  </div>
                                </div>
                                <div class="form-group pad-ver">
                                  <label class=" control-label">Inline Checkboxes</label>
                                  <div class="ml15">
                                    <div class="radio">
                                      <!-- Inline radio buttons -->
                                      <input id="demo-inline-form-radio" class="magic-checkbox" type="checkbox" name="inline-form-radio" checked="" disabled>
                                      <label for="demo-inline-form-radio">是否开放数据</label>

                                      <input id="demo-inline-form-radio-2" class="magic-checkbox" type="checkbox" name="inline-form-radio" disabled>
                                      <label for="demo-inline-form-radio-2">是否需要认证</label>

                                      <input id="demo-inline-form-radio-3" class="magic-checkbox" type="checkbox" name="inline-form-radio" disabled>
                                      <label for="demo-inline-form-radio-3">是否限制数据范围</label>

                                    </div>
                                  </div>
                                </div>
                                <div class="form-group pad-ver">
                                  <label class=" control-label">应用IP白名单：</label>
                                  <div class="ml15">
                                    <input type="text" class="form-control" placeholder="Text" disabled="">
                                  </div>
                                </div>
                                <div class="form-group pad-ver">
                                  <label class=" control-label">支持格式：</label>
                                  <div class="ml15">
                                    <p class="form-control-static">Json</p>
                                  </div>
                                </div>
                                <div class="form-group pad-ver">
                                  <label class=" control-label">请求方式：</label>
                                  <div class="ml15">
                                    <p class="form-control-static">get</p>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>

                        </div>

                        <div class="panel3">
                          <div class="panel-heading">
                            <h3 class="panel-title">限制条件</h3>
                            <div class="panel-control">
                              <button class="btn btn-default" data-target="#panel3" data-toggle="collapse" aria-expanded="true"><i class="glyphicon glyphicon-chevron-down"></i></button>
                            </div>
                          </div>
                          <div id="panel3" class="collapse" aria-expanded="true" style="">
                            <div class="panel-body">
                              <div class="form-group">
                                <span class="mar-rgt">版本信息：</span>
                                <span class="mar-rgt">123123</span>
                              </div>
                              <div class="form-group">
                                <span class="mar-rgt">备注信息：</span>
                                <span class="mar-rgt">123123</span>
                              </div>
                              <div class="form-group">
                                <span class="mar-rgt">请求示例：</span>
                                <span class="mar-rgt">123123</span>
                              </div>
                              <div class="form-group">
                                <div>
                                  <span class="mar-rgt">请求参数说明：</span>
                                </div>
                                <div class="fixed-table-container" style="padding-bottom: 0px;">
                                  <div class="fixed-table-body">
                                    <table class="table table-hover mytable toptable">
                                      <thead>
                                        <tr>
                                          <th>
                                            <div class="th-inner sortable">名称</div>
                                          </th>
                                          <th>
                                            <div class="th-inner sortable">类型</div>
                                          </th>
                                          <th>
                                            <div class="th-inner sortable">必填</div>
                                          </th>
                                          <th>
                                            <div class="th-inner sortable">说明</div>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr ng-repeat="item in importParameterDataSet">
                                          <td>123</td>
                                          <td>123</td>
                                          <td><i class="ion ion-checkmark-round text-primary"></i></td>
                                          <td>1231</td>
                                          <td style="display:none;">
                                            <i ng-if="item.IsForeignKey" class="ion ion-checkmark-round text-primary"></i>
                                            <span ng-show="item.IsForeignKey" class="btn-link td_sli_btn">详情</span>
                                            <!-- 结果展示框 -->
                                            <div class="td_sli_panel bord-all pad-all resultDiv">
                                              <div class="Dytablelist">
                                                <dl>
                                                  <dt>关联表名称</dt>
                                                  <dd>
                                                    213
                                                  </dd>
                                                </dl>
                                                <dl>
                                                  <dt>关联表字段</dt>
                                                  <dd>
                                                    123
                                                  </dd>
                                                </dl>
                                                <dl>
                                                  <dt>关联显示字段</dt>
                                                  <dd>
                                                    123
                                                  </dd>
                                                </dl>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <div>
                                  <span class="mar-rgt">返回参数说明：</span>
                                </div>
                                <div class="fixed-table-container" style="padding-bottom: 0px;">
                                  <div class="fixed-table-body">
                                    <table class="table table-hover mytable">
                                      <thead>
                                        <tr>
                                          <th>
                                            <div class="th-inner sortable">名称</div>
                                          </th>
                                          <th>
                                            <div class="th-inner sortable">类型</div>
                                          </th>
                                          <th>
                                            <div class="th-inner sortable">必选</div>
                                          </th>
                                          <th>
                                            <div class="th-inner sortable">说明</div>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr ng-repeat="item in exportParameterDataSet">
                                          <td>123</td>
                                          <td>123</td>
                                          <td><i class="ion ion-checkmark-round text-primary"></i></td>
                                          <td>123</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div class="form-group">
                                <span class="mar-rgt">返回值示例：</span>
                                <div>
                                  <pre class="pre">123123</pre>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <!-- tab2 -->
              <div class="tab-pane pad-btm fade" id="Errorcode">
                <!-- 预览 -->
                <div class="fixed-table-container bord-no apishow" style="padding-bottom: 0px;" v-show="editortext">
                  <div class="fixed-table-body">
                    <table class="table table-hover mytable">
                      <thead>
                        <tr>
                          <th>
                            <div class="th-inner sortable">错误码</div>
                          </th>
                          <th>
                            <div class="th-inner sortable">说明</div>
                          </th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr ng-repeat="item in errorCodeList">
                          <td>asdasd</td>
                          <td>asdasd</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
              <div class="tab-pane pad-btm fade" id="Excode">
                <!-- tab3 -->

                <!-- 预览 -->
                <div class="fixed-table-container bord-no apishow" style="padding-bottom: 0px;" v-show="editortext">
                  <div class="fixed-table-body">
                    <table class="table table-hover mytable">
                      <thead>
                        <tr>
                          <th>
                            <div class="th-inner sortable">语言</div>
                          </th>
                          <th>
                            <div class="th-inner sortable">标题</div>
                          </th>
                          <th>
                            <div class="th-inner sortable">提供者</div>
                          </th>
                          <th>
                            <div class="th-inner sortable">时间</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr ng-repeat="item in ExcodeList">
                          <td>qweqe</td>
                          <td>
                            <a class="text-primary apiex" ng-click="openShow(item.ID);">2131313</a>
                          </td>
                          <td>233</td>
                          <td>233</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    //调用组件
    draggable
  },
  name: "HelloWorld",
  data() {
    return {
      editortext: true,
      editselsctid: "6333213f-482c-43b9-90a8-43c7fc948f85",
      list: [
        {
          id: 1,
          name: "a"
        },
        {
          id: 2,
          name: "b"
        }
      ],
      listDataSet: [
        {
          ID: "6333213f-482c-43b9-90a8-43c7fc948f85",
          AgentApiAddress:
            "http://apiApi.fyedu.org/Agent/6333213f-482c-43b9-90a8-43c7fc948f85",
          ApiAddress:
            "http://dataApi.fyedu.org/VocationalTeacher/GetVocationalTeacherInfo",
          AuditStatus: 4,
          CreateTime: "2018-01-09 17:40:37",
          CreateUser: "a4056daa-c2a1-4bbd-89bf-21e85bd006d0",
          DataOpenType: 8,
          Edition: "V1.0",
          INTER_DataFunClassify_ID: "477a7308-aa28-4698-a6d6-7bc0d2787c56",
          Name: "中职教师信息",
          PublishStatus: 6,
          Reamrk: "中职教师信息",
          RequestSample:
            "http://apiApi.fyedu.org/Agent/6333213f-482c-43b9-90a8-43c7fc948f85",
          ReturnSample:
            '{\n  "msg": null,\n  "obj": null,\n  "rows": [],\n  "success": true,\n  "total": 0,\n  "failure": 0,\n  "failureMsg": null\n}',
          Sort: null
        },
        {
          ID: "57ba1975-961c-4ff7-9180-301b08b7e5a5",
          AgentApiAddress:
            "http://apiApi.fyedu.org/Agent/57ba1975-961c-4ff7-9180-301b08b7e5a5",
          ApiAddress:
            "http://dataApi.fyedu.org/VocationalTeacher/GetVocationalTeacherBelongInfo",
          AuditStatus: 4,
          CreateTime: "2018-01-09 17:40:41",
          CreateUser: "a4056daa-c2a1-4bbd-89bf-21e85bd006d0",
          DataOpenType: 8,
          Edition: "V1.0",
          INTER_DataFunClassify_ID: "477a7308-aa28-4698-a6d6-7bc0d2787c56",
          Name: "中职教师附属信息",
          PublishStatus: 6,
          Reamrk: "中职教师附属信息",
          RequestSample:
            "http://apiApi.fyedu.org/Agent/57ba1975-961c-4ff7-9180-301b08b7e5a5",
          ReturnSample:
            '{\n  "msg": null,\n  "obj": null,\n  "rows": [],\n  "success": true,\n  "total": 0,\n  "failure": 0,\n  "failureMsg": null\n}',
          Sort: null
        }
      ],
      dataFunObj: {
        AccessServiceProvider: "第三方",
        Bak: null,
        CreateTime: "2018-01-09 11:35:19",
        CreateUserName: "系统管理员",
        DataCode: "180109113519",
        ID: "477a7308-aa28-4698-a6d6-7bc0d2787c56",
        INTER_ApiClassify_ID: "813de173-d2ab-4e78-865b-39fee0ec896b",
        ImgUrl: null,
        Name: "教师相关信息",
        TagImage: null
      }
    };
  },
  methods: {
    showslideToggle() {
      $("#audsubmitpanel").slideToggle();
    }
  }
};
</script>


<style lang="less" scoped>
.app_input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 80%;
  }
}
</style>
