<template>
  <div>
    <table>
      <tr>
        <th>日期</th>
        <th>金额</th>
      </tr>
      <tr v-for="arr in arrs">
        <td>{{arr.name}}</td>
        <td>{{arr.value}}</td>
      </tr>
    </table>
    <div>
      <span v-bind:title="msg">
    			鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>
    <div>
      姓：<input type="text" v-model="Fistname" />
      名：<input type="text" v-model="Lastname" />
      <p>{{fullName}}</p><p>{{count}}</p>
    </div>
    <div>
      <p>单个复选框：</p>
      <input type="checkbox" id="chbox" v-model="checked" />
      <label for="checkbox">{{checked}}</label>
      <p>多个复选框：</p>
      <input type="checkbox" id='runoob' value="Runoob" v-model="checkNames"  /><label for="runoob">Runoob</label>
      <input type="checkbox" id='google' value="Google" v-model="checkNames"  /><label for="google">Google</label>
      <input type="checkbox" id='taobao' value="Taobao" v-model="checkNames"  /><label for="taobao">Taobao</label>
      <br />
      <span>选择的值为：{{checkNames}}</span>
    </div>
    <div class="black">
      <input type="button" value="返回上个页面" @click="black"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '页面加载于 ' + new Date().toLocaleString(),
      arrs:[
        {name:'1',value:'10'},
        {name:'2',value:'20'},
        {name:'3',value:'30'},
        {name:'4',value:'40'}
      ],
      Fistname:'',
      Lastname:'',
      count:0,
      checked:true,
      checkNames:[]
    }
  },
  methods:{
  black:function () {
    this.$router.go(-1)
  }
  },
  computed:{
    fullName:function(){
      return this.Fistname+''+this.Lastname
    }
  },
  watch:{
    Fistname:function(){
      this.count++
    },
    Lastname:function(){
      this.count++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/
/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/
/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/
/*a {*/
  /*color: #42b983;*/
/*}*/
</style>
