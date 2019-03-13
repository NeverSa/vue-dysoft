
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
          <dl>
              <form class="form-inline line">
					            <div class="form-group">
					                <label for="demo-inline-inputmail" class="sr-only">Email address </label>
                                      <v-select v-model="selected" :options="option" label="id" placeholder="请选择" no-options>
                                          <div slot="no-options">未找到结果</div>
                                      </v-select>
					            </div>
					            <div class="form-group">
					                <label for="demo-inline-inputpass" class="sr-only">Password</label>
					                <input type="password" placeholder="Password" id="demo-inline-inputpass" class="form-control">
					            </div>
					            <div class="checkbox">
					                <input id="demo-remember-me" class="magic-checkbox" type="checkbox">
					                <label for="demo-remember-me">Remember me</label>
					            </div>
					            <button class="btn btn-primary" type="submit">Sign in</button>
					        </form>
          </dl>
        </div>
        
      </div>
   
      <div id="pageContain">
      </div>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {
        option:[{name:"2313",id:"1"},{name:"12313",id:"2"}],
        selected:"",
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
  },
  created() {
      setTimeout(()=>{
        this.options.data=[{ id: 0, text: 'enhancement' },
                { id: 1, text: 'bug' },
                { id: 2, text: 'duplicate' },
                { id: 3, text: 'invalid' },
                { id: 4, text: 'wontfix' }]
      },2000)
  },
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
