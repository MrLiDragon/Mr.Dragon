<template>
  <div>
    <div class="tab-head">
      <ul class="tab-list">
        <li v-for="(item,index)  in tabList" v-on:click="addClass(index)" v-bind:class="{ active:index==current}">{{item.title}}</li>
      </ul>
    </div>
    <div>
      轮播图
    </div>
  </div>
</template>

<script>
    export default {
        name: "findmusic",
      data() {
        return {
          tabList: [
            { id: 0, title: "个性推荐" },
            { id: 1, title: "歌单" },
            { id: 2, title: "主播电台" },
            { id: 3, title: "排行榜" },
            { id: 4, title: "歌手" },
            { id: 5, title: "最新音乐" }
          ],
          current:0
        };
      },
      methods: {
        addClass: function(index) {
          this.current = index;
        }
      }
    }
</script>

<style scoped>
  @import "../../css/findmusic.css";
</style>
