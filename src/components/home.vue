<template>
  <div
    id="container"
    class="mainnav-lg"
  >
    <header id="navbar">
      <div
        id="navbar-container"
        class="boxed"
      >
        <div class="navbar-header">
          <a
            href="#"
            class="navbar-brand"
          >
            <!--<img src="style/img/logo.png" alt="Nifty Logo" class="brand-icon">-->
            <img
              src="http://localhost:60001/DySystemServices/uploads/default/4576288f-79ea-4923-b5ff-cd3530e892c5.png"
              alt="Logo"
              class="brand-icon"
            >
            <div class="brand-title">
              <span
                id="systemNameUp"
                class="brand-text ng-binding"
              >接口中心</span>
            </div>
          </a>
        </div>

        <div class="navbar-content clearfix">
          <ul class="nav navbar-top-links pull-left">
            <li class="tgl-menu-btn">
              <a
                class="mainnav-toggle"
                href="#"
              >
                <i class="ti-view-list icon-lg"></i>
              </a>
            </li>

            <!--消息通知-->
            <li
              class="dropdown ng-scope"
              ng-controller="notifyController"
              ng-click="dropDown()"
              title=""
            >
              <a
                href="javascript:void(0);"
                data-toggle="dropdown"
                class="dropdown-toggle "
                ng-class="signalrBellContainState"
              >
                <div ng-class="signalrBellState">
                  <i
                    class="ti-bell icon-lg"
                    style="transition: color 0.3s linear;"
                    ng-style="signalrConnectionStateStyle"
                  ></i>
                </div>
                <span
                  class="badge badge-header badge-danger ng-hide"
                ></span>
              </a>

              <div
                class="dropdown-menu dropdown-menu-md"
                title=""
              >
                <div class="pad-all bord-btm">
                  <p
                    class="text-semibold text-main mar-no ng-hide"
                  >
                    您有未读通知.
                    <span
                      class="btn-link pull-right"
                      style="font-size:12px;"
                    >全部标为已读</span>
                  </p>
                  <p
                    class="text-semibold text-main mar-no ng-hide"
                  >暂时没有新的通知.</p>
                </div>
                <div class="nano scrollable">
                  <div class="nano-content">
                    <ul class="head-list">

                    </ul>
                  </div>
                </div>

                <div class="pad-all bord-top">
                  <a
                    ui-sref="NoticeList"
                    class="btn-link text-dark box-block"
                  >
                    <i class="ti-angle-right pull-right"></i>查看所有通知
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <ul class="nav navbar-top-links pull-right">

            <li
              id="dropdown-user"
              class="dropdown"
            >
              <a
                href=""
                data-toggle="dropdown"
                class="dropdown-toggle text-right"
              >
                <span
                  class="pull-right"
                  style="margin-right: 18px;"
                >
                  <img
                    src="style/img/user.png"
                    style="width: 25px;padding-bottom: 7px;"
                  >
                </span>
                <div class="username hidden-xs ng-binding"></div>
              </a>

              <div class="dropdown-menu dropdown-menu-md dropdown-menu-right panel-default">
                <div class="pad-all bord-btm">
                  <p class="text-main mar-btm"><span class="text-bold">750GB</span> of 1,000GB Used</p>
                  <div class="progress progress-sm">
                    <div
                      class="progress-bar"
                      style="width: 70%;"
                    >
                      <span class="sr-only">70%</span>
                    </div>
                  </div>
                </div>

                <ul class="head-list">
                  <li>
                    <a
                      target="_dyProfile"
                      href="http://localhost:24947/AccountCenter/Profile.html"
                    >
                      <i class="ti-user icon-fw icon-lg"></i> 个人中心
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="badge badge-danger pull-right">9</span>
                      <i class="ti-email icon-fw icon-lg"></i> 通知
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      class="index-ui-setting-open"
                    >
                      <i class="ti-settings icon-fw icon-lg"></i> 界面设置
                    </a>
                  </li>
                </ul>

                <div class="pad-all text-right">
                  <a
                    class="btn btn-primary"
                  >
                    <i class="ti-unlock icon-fw"></i> 安全退出
                  </a>
                </div>
              </div>
            </li>

            <li>
              <a class="aside-toggle navbar-aside-icon">
                <i class="pci-ver-dots"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </header>
    <!--ASIDE-->
    <aside id="aside-container">
      <div id="aside">
        <div class="nano">
          <div class="nano-content">

           
            <ul class="nav nav-tabs nav-justified">
              <li>
                <a href="#demo-asd-tab-2">
                  <i class="demo-pli-information icon-fw"></i> Report
                </a>
              </li>
              <li>
                <a href="#demo-asd-tab-3">
                  <i class="demo-pli-wrench icon-fw"></i> Settings
                </a>
              </li>
            </ul>
          
          </div>
        </div>
      </div>
    </aside>
    <div class="boxed">
      <div id="content-container">
        <breadCrumbs :nav="menuData"  ref="nav"></breadCrumbs>
        
        <div id="page-content">
          <router-view></router-view>
        </div>
      </div>

      <nav id="mainnav-container">
        <div class="mainnav_slider_btn">
          <i class="ion-chevron-left"></i>
        </div>
        <div id="mainnav">
          <div id="mainnav-menu-wrap">
            <div class="nano">
              <div class="nano-content">
                <div
                  id="mainnav-profile"
                  class="mainnav-profile"
                >
                  <div class="profile-wrap">
                    <div class="pad-btm">
                      <img
                        class="img-circle img-sm img-border"
                        alt="Profile Picture"
                      >
                    </div>
                    <a
                      href="#"
                      class="box-block"
                      data-target="#profile-nav"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <span class="pull-right dropdown-toggle">
                        <i class="dropdown-caret"></i>
                      </span>
                      <p class="mnp-name">2222</p>
                      <span class="mnp-desc">1044170311@@qq</span>
                    </a>
                  </div>
                  <div
                    id="profile-nav"
                    class="collapse list-group bg-trans"
                  >
                    <a
                      target="_dyProfile"
                      class="list-group-item"
                    >
                      <i class="ti-user"></i> 个人中心
                    </a>
                    <a
                      href=""
                      class="list-group-item index-ui-setting-open"
                    >
                      <i class="ti-settings"></i> 界面设置
                    </a>
                    <a
                      href=""
                      class="list-group-item"
                    >
                      <i class="ti-help-alt"></i> 帮助
                    </a>
                    <a
                      href=""
                      class="list-group-item"
                    >
                      <i class="ti-unlock"></i> 注销
                    </a>
                  </div>
                </div>

                <!--左侧菜单-->
                <ul
                  id="mainnav-menu"
                  class="list-group"
                >
                  <li
                    v-for="item in menuData"
                    class="list-header"
                    v-if="item.header"
                  >
                    {{item.name}} {{item.header}}
                  </li>
                  <li
                    v-else
                    :class="{'active':item.isSubShow,'active-link':item.isSubShow&&!(item.children&&item.children.length>0)}"
                  >
                    <a
                      href="#"
                      @click.stop="showToggle(item)"
                    >
                      <i class="ti-user"></i>
                      <span class="menu-title">
                        <strong>{{item.name}}</strong>
                      </span>
                      <i
                        class="arrow"
                        v-if="item.children&&item.children.length>0"
                      ></i>
                    </a>
                    <ul
                      class="collapse"
                      :class="{'in':item.children&&item.children.length>0&&item.isSubShow}"
                      v-if="item.children&&item.children.length>0"
                    >
                      <li
                        :class="{'active-link':item1.isSubShow}"
                        v-for="item1 in item.children"
                        @click.stop="showToggle(item1,item.children)"
                      ><a href="#">{{item1.name}}</a></li>
                    </ul>
                  </li>
                  <li class="list-divider"></li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  </div>
</template>

<script>
import breadCrumbs from "@/component_pack/breadCrumbs";
export default {
  name: "HelloWorld",
  components:{
    breadCrumbs,
  },
  data() {
    return {
      aside: false,
      menuData: [
        {
          name: "接口中心",
          header: true,
          icon: "",
          link: "",
          children: [],
          isSubShow: false
        },
        {
          name: "平台信息管理",
          icon: "ti-help-alt",
          header: false,
          link: "",
          isSubShow: false,
          children: [
            {
              name: "友情链接管理",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
          ]
        },
        {
          name: "接口中心",
          icon: "ti-help-alt",
          link: "",
          header: false,
          children: [],
          isSubShow: false,
          children:[
             {
              name: "接口维护",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "接口审核",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "接口请求统计",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "接口测试",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "接口监控",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "错误代码维护",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
            
          ]
        },
        {
          name: "文档中心",
          header: false,
          icon: "",
          link: "",
           isSubShow: false,
          children: [
            {
              name: "开放能力",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "服务与支持",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "规范与协议",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "文档标签",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
          ],
         
        },
        {
          name: "接入管理",
          icon: "ti-help-alt",
          header: false,
          link: "",
          isSubShow: false,
          children: [
            {
              name: "开发者管理",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
            {
              name: "上线审核",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "应用Scope审核",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "应用分类管理",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
          ]
        },
        {
          name: "数据推送",
          icon: "ti-help-alt",
          link: "",
          header: false,
          isSubShow: false,
          children:[
             {
              name: "数据字典结构",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
             {
              name: "jsplumpTest",
              icon: "ti-help-alt",
              header: false,
              link: "",
              isSubShow: false
            },
          ],
        }
      ]
    };
  },
  created() {
   console.log(this)
  },
  methods: {
    showToggle: function(menu, children) {
      if (children) {
        this.menuData.forEach(item => {
          item.children.forEach(item1 => {
            item1.isSubShow = false;
          });
        });
        
        children.forEach(item => {
          if (menu.name == item.name) {
            item.isSubShow = true;
          } else {
            item.isSubShow = false;
          }
        });
      } else {
        if (!menu.isSubShow) {
          this.menuData.forEach(item => {
            item.isSubShow = false;
          });
        }
        menu.isSubShow = !menu.isSubShow;
      }
       this.$refs.nav.updatatitle();
    }
    
  },
  mounted() {}
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
</style>
