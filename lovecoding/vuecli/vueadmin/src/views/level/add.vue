<template >
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-row>
      <el-button type="success" @click="addlevel">添加职位</el-button>
    </el-row>
  </div>
</template>

<script>
import { levelAdd } from "@/api/level";
import axios from "axios";
export default {
  data() {
    return {
      input: "",
      dataList: {
        levelname: "",
      },
    };
  },
  methods: {
    addlevel() {
      this.dataList.levelname = this.input;
      levelAdd(this.dataList);
      this.$router.push('levellist');
      
    },
  },
};
</script>