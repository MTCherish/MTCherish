<template>
  <div >
    <!-- <h1>页面3</h1>
    <h1>{{ $route.params.username }}</h1> -->

    <el-table :data="datalist" style="width: 100%" v-loading="loading" element-loading-text="拼命加载中">
      <el-table-column type="index" label="序号" width="50"> </el-table-column>
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="title" label="名称" width="180"> </el-table-column>
      <el-table-column prop="info" label="地址"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="goDeatil(scope.row)" type="text" size="small"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="num"
      :page-size="5"
      @current-change="currentPage"
    >
    </el-pagination>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import axios from "axios";
export default Vue.extend({
  data() {
    return {
      loading: false,
      num: 0,
      datalist: [],
    };
  },
  methods: {
    goDeatil(item) {
      this.$router.push("/tvdetail/" + item.id);
    },
    getData(start) {
      this.loading = true;
      axios
        .get(
          "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=" +
            start * 5 +
            "&count=5"
        )
        .then((res) => {
          this.datalist = res.data.subject_collection_items;
          this.num = res.data.total;
        });
      this.loading = false;
    },
    currentPage(res) {
      this.getData(res - 1);
    },
  },
  created() {
    // console.log(this.$route.params.username);
    // console.log(this.$route);
    // console.log(this.$router);
    this.getData(0);
  },
});
</script>