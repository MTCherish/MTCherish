<template>
  <div>
    
    <el-table :data="tableData" style="width: 100%" v-loading="loading">
      <el-table-column type="index" :index="1"> </el-table-column>
      <el-table-column prop="jrid" label="ID" width="180"> </el-table-column>
      <el-table-column
        prop="levelname"
        label="职位"
        width="180"
      ></el-table-column>

      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click.native.prevent='dellevelname(scope.$index, tableData)'>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { levelList ,levelDel} from "@/api/level";
export default {
  data() {
    return {
        loading:false,
      tableData: [],
    };
  },
  methods: {
    getList() {
      levelList().then((res) => {
        this.tableData = res.data.data;
        // console.log(res);
      });
    },
    dellevelname(re1,re2){
        
         this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.loading =true;
            levelDel({levelid:re2[re1].jrid});
            console.log(2222);
            this.getList();
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.loading = false;
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  },
  created() {
    this.getList();
  },
};
</script>