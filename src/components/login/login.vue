<template>
      <div class="login">
        <form class="logins" action="" method="post" @keyup.enter="go" >
          <h1>Login</h1>
          <div>
            <input @focus="viewRestore()" type="text" name="username" class="username" placeholder="用户名" autocomplete="off" v-model="username"/>
          </div>
          <div>
            <input @focus="viewRestore()" type="password" name="password" class="password" placeholder="密码" oncontextmenu="return false" onpaste="return false" v-model="password" />
          </div>
          <div>
            <p style="color: red;height: 20px" v-if="pd">{{pds}}</p>
          </div>
          <button id="submit" type="button"   @click="go">登入</button>
        </form>
      </div>
</template>

<script>
    export default {
      name: "login",
      data(){
        return{
          username:'',
          password:'',
          pd:true,
          pds:''
        }
      },
      methods:{
        viewRestore(name) {
          this.pds=''
        },
          go(){
            if(this.username==''&&this.password==''){
              this.pds='请输入用户名和密码'
              return
            }
            if(this.username==''){
              this.pds='请输入用户名'
              return
            }
            if(this.password==''){
              this.pds='请输入密码'
              return
            }
            if(this.username!='123456789'||this.password!="123"){
              this.pds='用户名或密码错误，请重新输入'
              return
            }
            if(this.username=='123456789'&&this.password=="123"){
              this.$router.push('/home')
            }
          }
      }
    }
</script>

<style scoped>
  @import '../../css/login.css';
</style>
