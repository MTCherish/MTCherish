<template>
  <div>
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="地址">
          <el-select v-model="addressId" placeholder="选择地址">
            <el-option
              v-for="item in addressList"
              :key="item.addressid"
              :label="item.addressname"
              :value="item.addressid"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchaddress">查询</el-button>
          <el-button @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="tableData" style="width: 100%" v-loading="loading">
      <el-table-column type="index" :index="1" label="序号"> </el-table-column>
      <el-table-column prop="jrname" label="姓名"></el-table-column>
      <el-table-column prop="levelname" label="等级"></el-table-column>
      <el-table-column prop="addressname" label="地址"></el-table-column>
      <el-table-column prop="jrtel" label="手机号"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope" style="width: 180px">
          <el-button
            type="text"
            size="small"
            icon="el-icon-edit"
            @click.native.prevent="editmessage(scope.row)"
            >更改</el-button
          >
          <el-button
            type="text"
            size="small"
            icon="el-icon-delete"
            @click.native.prevent="delmessage(scope.$index, tableData)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
// adressDel
import { messageList, messageDel, messageByAdress } from "@/api/information";
import { addressList } from "@/api/address";
export default {
  data() {
    return {
      addressId: "",
      loading: false,
      tableData: [],
      addressList: [],
    };
  },
  methods: {
    editmessage(item) {
      this.$router.push({
        path:"/information/informationadd",
        query:{
          id:item.jrid
        }
      });
      // console.log(item);
    },
    resetSearch() {
      this.getList();
      this.addressId = "";
    },
    searchaddress() {
      messageByAdress({ searchid: this.addressId }).then((res) => {
        let thisAddressName = "";
        this.addressList.map((item) => {
          if (item.addressid == this.addressId) {
            thisAddressName = item.addressname;
          }
        });
        this.tableData = res.data.data.map((item) => {
          item.addressname = thisAddressName;
          return item;
        });
      });
    },
    getList() {
      messageList().then((res) => {
        this.tableData = res.data.data;
        // console.log(res);
      });
    },
    getAddressData() {
      addressList().then((res) => {
        this.addressList = res.data.data;
      });
    },
    delmessage(re1, re2) {
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.loading = true;
          messageDel({ id: re2[re1].jrid });
          // console.log(re2[re1].jrid );

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
    this.getAddressData();
  },
};
</script>