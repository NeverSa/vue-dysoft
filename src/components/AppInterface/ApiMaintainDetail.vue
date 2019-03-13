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
              <div v-show="editortext">
                <button class="btn btn-default btn-sm mar-btm" @click="editortext=!editortext">编辑API</button>
              </div>
              <div v-show="!editortext">
                <button class="btn btn-default btn-sm mar-btm" @click="editortext=!editortext">API预览</button>
              </div>
              <div class="mar-btm">
                <button class="btn btn-default btn-sm" id="apitest">接口测试</button>
              </div>
              <div class="mar-btm">
                <button class="btn btn-default btn-sm" id="apicount">请求统计</button>
              </div>
              <div class="mar-btm">
                <button id="audbtn" class="btn btn-primary btn-sm" @click="showslideToggle()">发布&取消</button>
              </div>
            </div>
          </div>
          <div id="audsubmitpanel" class="panel pos-abs bg-gray-light" style="top: 110%;right: 0;z-index: 100;display: none;width:460px;border: 1px solid #42a5f5;">
            <div class="panel-body form-horizontal form-padding pos-rel" style="padding-bottom: 15px;">
              <button class="close" id="audsubmitclose" type="button"><i class="pci-cross pci-circle"></i></button>
              <div class="form-group pad-top">
                <div class="mar-btm pad-no">
                  <button class="btn btn-default" ng-click="publishAll(true)">全部发布</button>
                  <button class="btn btn-default" ng-click="publishAll(false)">全部取消</button>
                </div>
                <div class="fixed-table-container">
                  <div class="fixed-table-body" style="max-height:400px;overflow:auto;">
                    <table class="table table-hover mytable">
                      <thead>
                        <tr>
                          <th>
                            接口名称
                          </th>
                          <th colspan="2">
                            发布状态
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
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
                                          <!--<th>
                                                            <div class="th-inner sortable">是否外键关联</div>
                                                        </th>-->
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

                <!-- 修改 -->
                <div class="panel" v-show="!editortext">
                  <div class="apishow">
                    <div class="row mar-no">
                      <div class="col-xs-3 pad-no">
                        <div class="pad-all bord-btm">
                          <button ng-click="ApiAddBtn()" class="ion ion-plus btn btn-default">添加API</button>
                          <button @click="ApiSortBtn()" class="ion ion-navicon btn btn-default">调整顺序</button>
                        </div>
                        <div class="list-group bord-no">
                          <div class="list-group-item " v-for="(item,index) in listDataSet" :class="{'active':editselsctid==item.ID}" @click="editselsctid=item.ID">
                            <span>{{item.Name}}</span>
                            <i class="ion ion-trash-a text-danger lgt_delete"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-xs-9 bord-lft ">
                        <div class="panel">
                          <div class="panel-heading">
                            <h3 class="panel-title">基础信息</h3>
                            <div class="panel-control">
                              <button class="btn btn-default" data-target="#panel4" data-toggle="collapse" aria-expanded="true"><i class="glyphicon glyphicon-chevron-down"></i></button>
                            </div>
                          </div>
                          <div id="panel4" class="collapse " aria-expanded="true" style="">
                            <div class="panel-body">
                              <form class="form-horizontal form-padding">
                                <div class="form-group">
                                  <span class="mar-rgt ">审核状态：审核通过</span>
                                  <span class="mar-rgt ng-binding">发布状态：发布</span>
                                  <span class="mar-rgt ng-binding">创建时间：2018-01-09 17:40:37</span>
                                </div>
                                <div class="form-group pad-ver"><label class=" control-label">应用IP白名单：</label>
                                  <div class="ml15"><input type="text" placeholder="Text" class="form-control"></div>
                                </div>
                                <div class="form-group pad-ver"><label class=" control-label">实际接口地址：</label>
                                  <div class="ml15"><input type="text" placeholder="Text" class="form-control"></div>
                                </div>
                                <div class="form-group pad-ver"><label class=" control-label">代理接口地址：</label>
                                  <div class="ml15"><input type="text" placeholder="Text" class="form-control"></div>
                                </div>
                                <div class="form-group pad-ver">
                                  <label class=" control-label">是否支持增量：</label>
                                  <div class="ml15">
                                    <div class="radio">
                                      <label class="toggle-switch"><input type="checkbox"> <span class="toggle-switch-icon"></span></label>
                                    </div>

                                  </div>
                                </div>
                                <div class="form-group pad-ver"><label class=" control-label">唯一关联表：</label>
                                  <div class="ml15"><input type="text" placeholder="Text" class="form-control"></div>
                                </div>
                              </form>
                            </div>

                          </div>
                        </div>

                        <div class="panel">
                          <div class="panel-heading">
                            <h3 class="panel-title">限制条件</h3>
                            <div class="panel-control">
                              <button class="btn btn-default" data-target="#panel5" data-toggle="collapse" aria-expanded="true"><i class="glyphicon glyphicon-chevron-down"></i></button>
                            </div>
                          </div>
                          <div id="panel5" class="collapse " aria-expanded="true" style="">
                            <div class="panel-body">
                              <form class="form-horizontal form-padding">
                                <div class="form-group pad-ver">
                                  <div class="col-md-9">
                                    <div class="radio">
                                      <!-- Inline radio buttons -->
                                      <input id="asas" class="magic-checkbox" type="checkbox" name="inline-form-radio">
                                      <label for="asas">是否开放数据</label>

                                      <input id="asas2" class="magic-checkbox" type="checkbox" name="inline-form-radio">
                                      <label for="asas2">是否需要认证</label>

                                      <input id="asas3" class="magic-checkbox" type="checkbox" name="inline-form-radio">
                                      <label for="asas3">是否限制数据范围</label>
                                    </div>
                                    <div class="radio" style="padding-left:247px">
                                      <input id="demo22" class="magic-radio" type="radio" name="radio2" checked="">
                                      <label for="demo22">机构范围</label>
                                      <input id="demo23" class="magic-radio" type="radio" name="radio2" checked="">
                                      <label for="demo23">学校范围</label>

                                    </div>
                                  </div>
                                </div>
                                <div class="form-group pad-ver">
                                  <label class=" control-label">用户调用次数限制：</label>
                                  <div class="ml15">
                                    <div class="radio">
                                      <input id="demos1" class="magic-radio" type="radio" name="radioss" checked="">
                                      <label for="demos1">无限</label>
                                      <input id="demos2" class="magic-radio" type="radio" name="radioss" checked="">
                                      <label for="demos2">每天调用次数

                                      </label>
                                      <input type="text" name="" id="" class="form-control" style="display: inline-block;width: 45px;">
                                      <input id="demos3" class="magic-radio" type="radio" name="radioss" checked="">
                                      <label for="demos3">分钟调用次数
                                      </label>
                                      <input type="text" name="" id="" class="form-control" style="display: inline-block;width: 45px;">
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group pad-ver">
                                  <label class=" control-label">应用IP白名单：</label>
                                  <div class="ml15">
                                    <p style="width:214px ;display: flex;justify-content: space-between;" class="bg-gray-light">IP地址<i id="bmdaddapp" ng-click="addIPPart()" class="float-r ion-plus bord-no mar-hor cur-po"></i></p>

                                    <p class="app_input" style="margin:4px 0;">
                                      <input type="text" class="form-control" />
                                      <i ng-click="removeIPPart($index)" class="float-r ion-minus bord-no mar-hor cur-po"></i>
                                    </p>
                                  </div>
                                </div>
                                <div class="form-group pad-ver">
                                  <label class=" control-label">支持格式：</label>
                                  <div class="ml15">
                                    <div class="radio">
                                      <!-- Inline radio buttons -->

                                      <input id="sakjd22j11" class="magic-checkbox" type="radio" name="inline-form-radio" checked="">
                                      <label for="sakjdj11">JSON</label>
                                    </div>
                                  </div>
                                </div>
                                <div class="form-group pad-ver">
                                  <label class=" control-label">请求方式：</label>
                                  <div class="ml15">
                                    <div class="radio">
                                      <!-- Inline radio buttons -->
                                      <input id="sakjdj33" class="magic-checkbox" type="checkbox" name="inline-form-radio" checked="">
                                      <label for="sakjdj33">get</label>

                                      <input id="sakjd22j44" class="magic-checkbox" type="checkbox" name="inline-form-radio" checked="">
                                      <label for="sakjdj44">post</label>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>

                        </div>

                        <div class="panel6">
                          <div class="panel-heading">
                            <h3 class="panel-title">限制条件</h3>
                            <div class="panel-control">
                              <button class="btn btn-default" data-target="#panel6" data-toggle="collapse" aria-expanded="true"><i class="glyphicon glyphicon-chevron-down"></i></button>
                            </div>
                          </div>
                          <div id="panel6" class="collapse" aria-expanded="true" style="">
                            <div class="panel-body">
                              <div class="form-group">
                                <span class="mar-rgt">版本信息：</span>
                                <span class="mar-rgt"><input type="text" placeholder="Text" class="form-control"></span>
                              </div>
                              <div class="form-group">
                                <span class="mar-rgt">备注信息：</span>
                                <span class="mar-rgt"><input type="text" placeholder="Text" class="form-control"></span>
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
                                          <th class="veral_mid">
                                            <i ng-click="AddImportParameter()" class="ion-plus"></i>
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr ng-repeat="item2 in importParameterDataEdit" ng-init="item=importParameterDataEdit[$index]">
                                          <td>
                                            <input type="text" ng-model="item.ParName" class="form-control" style="width:100%" />
                                          </td>
                                          <td>
                                            <select dy-select2="item.ParDataType" dy-select2-data="ApiParameterDataTypeSet" class="form-control" style="width:100%"></select>
                                          </td>
                                          <td class="veral_mid">
                                            <input class="magic-checkbox" type="checkbox" ng-model="item.IsMust">
                                            <label></label>
                                          </td>
                                          <td>
                                            <input type="text" ng-model="item.Remark" class="form-control" style="width:100%" />
                                          </td>
                                          <td class="veral_mid veral_mid_padr chkLinkTable" style="display:none;" ng-init="item.initFK = item.IsForeignKey">
                                            <input class="magic-checkbox" type="checkbox" ng-model="item.IsForeignKey">
                                            <label></label>
                                            <span class="btn-link td_sli_btn" ng-show="item.IsForeignKey">详情</span>
                                            <!-- 动态选择框 -->
                                            <div class="td_sli_panel bord-all pad-all selectDIV">
                                              <div class="Dytablelist">
                                                <dl>
                                                  <dt>关联表名称</dt>
                                                  <dd>
                                                    <select dy-select2="item.LinkTableNmTemp" style="width:150px;" dy-select2-selected="item.LinkTableName" dy-select2-data="LinkTableNmDataLoad"></select>
                                                  </dd>
                                                </dl>
                                                <dl>
                                                  <dt>关联表字段</dt>
                                                  <dd>
                                                    <select dy-select2="item.LinkTableFieldTemp" style="width:150px;" dy-select2-selected="item.LinkTableFieldName" dy-select2-remote-url="item.remoteUrl" dy-select2-remote-data="GetRemoteData({params},item)" dy-select2-remote-process-results="FormateResult({json, params},item)"></select>
                                                  </dd>
                                                </dl>
                                                <dl>
                                                  <dt>关联显示字段</dt>
                                                  <dd>
                                                    <select dy-select2="item.TableShowFieldTemp" style="width:150px;" dy-select2-selected="item.LinkTableShowFieldName" dy-select2-remote-url="item.remoteUrl" dy-select2-remote-data="GetRemoteData({params},item)" dy-select2-remote-process-results="FormateResult({json, params})"></select>
                                                  </dd>
                                                </dl>
                                              </div>
                                              <div class="text-center">
                                                <button class="btn btn-xs btn-primary td_sli_confirm" ng-click="SureRange(item)">确定</button>
                                              </div>
                                            </div>
                                            <!-- 结果展示框 -->
                                            <div class="td_sli_panel bord-all pad-all resultDiv">
                                              <div class="Dytablelist">
                                                <dl>
                                                  <dt>关联表名称</dt>
                                                  <dd>
                                                    asda
                                                  </dd>
                                                </dl>
                                                <dl>
                                                  <dt>关联表字段</dt>
                                                  <dd>
                                                    asdad
                                                  </dd>
                                                </dl>
                                                <dl>
                                                  <dt>关联显示字段</dt>
                                                  <dd>
                                                    asdad
                                                  </dd>
                                                </dl>
                                              </div>
                                              <div class="text-center">
                                                <button class="btn btn-xs btn-primary td_edit">修改</button>
                                              </div>
                                            </div>
                                          </td>
                                          <td class="veral_mid">
                                            <i ng-click="RemoveImportParameter($index)" class="ion-minus"></i>
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
                <!-- 编辑弹窗 -->
                <div class="modal fade" id="editec-modal" role="dialog" tabindex="-1" aria-labelledby="demo-default-modal" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>
                        <h4 class="modal-title">错误码编辑</h4>
                      </div>
                      <div class="modal-body">
                        <div class="form-horizontal">
                          <div class="form-group">
                            <label class="control-label col-sm-3">错误码:</label>
                            <div class="col-sm-8">
                              <input type="text" ng-model="errorcode" class="form-control">
                            </div>
                          </div>
                          <div class="form-group">
                            <label class="control-label col-sm-3">说明：</label>
                            <div class="col-sm-8 text-left">
                              <textarea rows="4" ng-model="remark" class="form-control"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <div class="form-group">
                          <div class="text-center ">
                            <button type="button" ng-click="errorCodeAddOrUpdate()" class="btn btn-primary">确认保存</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                <!-- 编辑 -->
                <!--编辑PI-错误码预览-->
                <div class="fixed-table-container bord-no apiedit" style="padding-bottom: 0px;" v-show="!editortext">
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
                          <th>
                            <label id="editec"><i class="ion-plus pad-hor" style="cursor:pointer;" title="添加" @click="Edit()"></i></label>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr ng-repeat="item in errorCodeList">
                          <td>q'we'q'e</td>
                          <td>q'we'q'e</td>

                          <td>
                            <label title="删除"><i class="ion-minus pad-hor" style="cursor:pointer;" ng-click="errorCodeDelete(item.ID)"></i></label>
                            <label title="编辑"><i class="ion-edit pad-hor editec" style="cursor:pointer;" @click="Edit(2)"></i></label>
                          </td>
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
                <!-- 编辑 -->

                <div class="fixed-table-container  bord-no apiedit" style="padding-bottom: 0px;" v-show="!editortext">
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
                          <th>
                            <label @click="setExcode()"><i class="ion-plus pad-hor" style="cursor:pointer;" title="添加"></i></label>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr ng-repeat="item in ExcodeList">
                          <td>asdad</td>
                          <td>
                            <a class="text-primary apiex">asdasd</a>
                          </td>
                          <td>asdad</td>
                          <td>asdad</td>
                          <td>
                            <label title="删除" ng-click="deleteExcode(item.ID);"><i class="ion-minus pad-hor ion-edit"></i></label>
                            <label title="编辑" @click="setExcode(1);"><i class="ion-edit pad-hor editex"></i></label>
                          </td>
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

    <div class="modal fade" id="adjustID">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>
            <h4 class="modal-title">API排序</h4>
          </div>

          <div id="position" class="modal-body">
            <draggable element="ul" v-model="list">
              <li class="ion-arrow-move" ng-repeat="item in list">
                <span class="menudetail">asdasd</span>
              </li>
            </draggable>
            <button style="margin-left:42%;" class="btn btn-primary" ng-click="savePosition()">保存设置</button>
          </div>

        </div>
      </div>
    </div>

    <div id="audsubmitpanel" class="panel pos-abs bg-gray-light" style="top: 110%;right: 0;z-index: 100;display: none;width:460px;border: 1px solid #42a5f5;">
      <div class="panel-body " style="padding-bottom: 15px;">
        <button class="close" id="audsubmitclose" type="button"><i class="pci-cross pci-circle"></i></button>
        <div class="form-group pad-top">
          <div class="mar-btm pad-no">
            <button class="btn btn-default" ng-click="publishAll(true)">全部发布</button>
            <button class="btn btn-default" ng-click="publishAll(false)">全部取消</button>
          </div>
          <div class="fixed-table-container">
            <div class="fixed-table-body" style="max-height:400px;overflow:auto;">
              <table class="table table-hover mytable">
                <thead>
                  <tr>
                    <th>
                      接口名称
                    </th>
                    <th colspan="2">
                      发布状态
                    </th>
                  </tr>
                </thead>
                <tbody ng-repeat="item in publishApiList">
                  <tr>
                    <td>asdadad</td>
                    <td>
                      <div dy-switch="item.PublishStatus" dy-switch-change="publishApi({value,dySwitchHandler,item:item})"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="modal fade" id="editex-modal" role="dialog" tabindex="-1" aria-labelledby="demo-default-modal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal"><i class="pci-cross pci-circle"></i></button>
            <h4 class="modal-title">示例代码编辑</h4>
          </div>
          <div class="modal-body">
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-3">语言:</label>
                <div class="col-sm-8">
                  <select class="form-control" dy-select2="ApiCodeLanguage.ID" dy-select2-remote-url="ApiCenterUrl+'/InterfaceExcode/GetEnumLanguageList'" dy-select2-remote-process-results="ApiCodeLanguage.Result({json, params})" data-minimum-results-for-search="Infinity" dy-select2-remote-init="ApiCodeLanguage.ID_init" data-placeholder="请选择"></select>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-3">标题：</label>
                <div class="col-sm-8">
                  <input type="text" class="form-control" ng-model="Excode.SampleTitile">
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-3">示例代码：</label>
                <div class="col-sm-8 text-left">
                  <textarea rows="8" class="form-control" ng-model="Excode.SampleCode"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="form-group">
              <div class="text-center ">
                <button type="button" class="btn btn-primary" ng-click="saveExcode();">确认保存</button>
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
    setExcode() {
      debugger;
      $("#editex-modal").slideToggle();
    },
    showslideToggle() {
      $("#audsubmitpanel").slideToggle();
    },
    ApiSortBtn() {
      $("#adjustID").modal("show");
    },
    Edit() {
      $("#editec-modal").modal("show");
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
