<template>
  <div>
    <el-table :data="tableData" style="width: 100%" v-loading="loading">
      <el-table-column type="index" :index="1"> </el-table-column>
      <el-table-column prop="addressname" label="地址">
      </el-table-column>
      <el-table-column
        prop="latitude"
        label="维度"
        
      ></el-table-column>
      <el-table-column
        prop="longitude"
        label="经度"
       
      ></el-table-column>
      <el-table-column fixed="right" label="操作" >
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click.native.prevent="deladdressname(scope.$index, tableData)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// adressDel
import { addressList, addressListDel } from "@/api/address";
export default {
  data() {
    return {
      loading: false,
      tableData: [],
    };
  },
  methods: {
    getList() {
      addressList().then((res) => {
        this.tableData = res.data.data;
        // console.log(res);
      });
    },
    deladdressname(re1, re2) {
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.loading = true;
          addressListDel({ addressid: re2[re1].addressid });

          this.getList();
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.loading = false;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  created() {
    this.getList();
  },
};
</script>