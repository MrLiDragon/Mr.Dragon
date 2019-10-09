<template>
    <div>
      <!--头部-->
      <div class="logo">
        <a href="#"><img src="../../assets/logo2.png" height="48" width="159"/></a>
        <div class="jiantou" >
            <span class="left"> < </span>
            <span class="left"> > </span>
        </div>
        <div style="margin-left: 20px;">
          <input type="text" class="sousuo" placeholder="搜索音乐、歌手、歌词、用户"/>
        </div>
        <div style="align-items: center;display: flex">
          <a href="#"><img src="../../assets/3.jpg" width="30" height="30" style="border-radius:15px;margin-left: 550px"/></a>
          <!--<input type="text" value="Dragon"/>-->
          <span style="color: white;font-size: 12px;margin-left: 10px">Dragon</span>
        </div>
      </div>
      <!--内容-->
      <div class="mainBox">
        <!--左侧菜单-->
        <div class="leftBox">
          <el-menu  default-active="1" class="el-menu-vertical-demo" style="background-color: #f5f5f5;" @select="tjSelect">
            <span style="margin-left: 10px;">推荐</span>
            <el-menu-item v-for="tuijians in tuijian" :index=tuijians.tjkey.toString()>
              <img :src=tuijians.url style="width:20px;margin-right: 10px" />{{tuijians.name}}
            </el-menu-item>
          </el-menu>
          <el-menu  default-active="1" class="el-menu-vertical-demo" style="background-color: #f5f5f5;" @select="mmSelect">
            <span style="margin-left: 10px">我的音乐</span>
            <el-menu-item v-for="mymusics in mymusic" :index=mymusics.mmkey.toString()>
              <img :src=mymusics.url style="width:20px;margin-right: 10px" />{{mymusics.name}}
            </el-menu-item>
          </el-menu>
          <el-menu  default-active="1" class="el-menu-vertical-demo" style="background-color: #f5f5f5;" @select="cjSelect">
            <span style="margin-left: 10px">创建的歌单</span>
            <el-menu-item v-for="cjgds in cjgd" :index=cjgds.cjkey.toString()>
              <img :src=cjgds.url style="width:20px;margin-right: 10px" />{{cjgds.name}}
            </el-menu-item>
          </el-menu>
          <el-menu  default-active="1" class="el-menu-vertical-demo" style="background-color: #f5f5f5;" @select="scSelect">
            <span style="margin-left: 10px">收藏的歌单</span>
            <el-menu-item v-for="scgds in scgd" :index=scgds.sckey.toString()>
              <img :src=scgds.url style="width:20px;margin-right: 10px" />{{scgds.name}}
            </el-menu-item>
          </el-menu>
        </div>
        <!--右侧内容-->
        <div class="rightBox">
          <router-view></router-view>
        </div>
      </div>
      <!--底部-->
      <div class="bottom">
        <div class="bofang">
          <a href="#"><img src="../../assets/music_pre.png" height="30" width="30" /></a>
          <a href="#"><img src="../../assets/music_play.png" height="38" width="38"/></a>
          <a href="#"><img src="../../assets/music_next.png" height="30" width="30" /></a>
        </div>
        <div>
          <!--<audio controls autoplay src="">-->
          <!--</audio>-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home",
      data(){
          return{
            tuijian:[
              {name:'发现音乐',url:require("../../assets/music.png"),tjkey:1},
              {name:'私人FM',url:require("../../assets/fm.png"),tjkey:2},
              {name:'MV',url:require("../../assets/mv.png"),tjkey:3},
              {name:'朋友',url:require("../../assets/friend.png"),tjkey:4},
            ],
            mymusic:[
              {name:'本地音乐',url:require("../../assets/local_music.png"),mmkey:5},
              {name:'下载管理',url:require("../../assets/download.png"),mmkey:6},
              {name:'我的音乐网盘',url:require("../../assets/cloud.png"),mmkey:7},
              {name:'我的歌手',url:require("../../assets/singer.png"),mmkey:8},
              {name:'我的电台',url:require("../../assets/station.png"),mmkey:9}
            ],
            cjgd:[
              {name:'我喜欢的音乐',url:require("../../assets/heart.png"),cjkey:10},
              {name:'aaa',url:require("../../assets/list.png"),cjkey:11},
              {name:'bbb',url:require("../../assets/list.png"),cjkey:12},
              {name:'ccc',url:require("../../assets/list.png"),cjkey:13},
              {name:'ddd',url:require("../../assets/list.png"),cjkey:14}
            ],
            scgd:[
              {name:'111',url:require("../../assets/list.png"),sckey:15},
              {name:'aaa',url:require("../../assets/list.png"),sckey:16},
              {name:'bbb',url:require("../../assets/list.png"),sckey:17},
              {name:'ccc',url:require("../../assets/list.png"),sckey:18},
              {name:'ddd',url:require("../../assets/list.png"),sckey:19}
            ]
          }
      },
      methods:{
        tjSelect(tjkey, keyPath){
          switch(tjkey){
            case '1':
              this.$router.push('/findmusic');
              break;
            case '2':
              this.$router.push('/fm')
              break;
            case '3':
              this.$router.push('/mv')
              break;
            case '4':
              this.$router.push('/friend')
              break;
          }
        },
        mmSelect(mmkey, keyPath){
          switch(mmkey){
            case '1':
              this.$router.push('/');
              break;
            case '2':
              this.$router.push('/')
              break;
            case '3':
              this.$router.push('/')
              break;
            case '4':
              this.$router.push('/')
              break;
          }
        },
       cjSelect(cjkey, keyPath){
          switch(cjkey){
            case '1':
              this.$router.push('/');
              break;
            case '2':
              this.$router.push('/')
              break;
            case '3':
              this.$router.push('/')
              break;
            case '4':
              this.$router.push('/')
              break;
          }
        },
        scSelect(sckey, keyPath){
          switch(sckey){
            case '1':
              this.$router.push('/');
              break;
            case '2':
              this.$router.push('/')
              break;
            case '3':
              this.$router.push('/')
              break;
            case '4':
              this.$router.push('/')
              break;
            case '5':
              this.$router.push('/')
              break;
          }
        }
      }
    }
</script>

<style scoped>
  @import "../../css/home.css";
  /*@import "https://www.jq22.com/jquery/jquery-1.10.2.js";*/
</style>
