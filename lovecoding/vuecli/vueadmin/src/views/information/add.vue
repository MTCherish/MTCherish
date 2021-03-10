<template>
  <div class="app-container" v-loading="loading">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="名字" prop="uname">
        <el-input v-model="ruleForm.uname"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
        <el-input v-model="ruleForm.tel"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="addressid">
        <el-select v-model="ruleForm.addressid" placeholder="请选择地址">
          <el-option
            v-for="item in addressL"
            :key="item.addressid"
            :label="item.addressname"
            :value="item.addressid"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="等级" prop="levelid">
        <el-select v-model="ruleForm.levelid" placeholder="请选择等级">
          <el-option
            v-for="item in levelL"
            :key="item.jrid"
            :label="item.levelname"
            :value="item.jrid"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-upload
          class="upload-demo"
          action="http://47.92.82.13:4000/getMessageA"
          name="sfile"
          multiple
          :on-success="sfileSuccess"
          :limit="1"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
        <el-upload
          class="upload-demo"
          action="http://47.92.82.13:4000/getMessageB"
          name="sweixin"
          multiple
          :on-success="weixinSuccess"
          :limit="1"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button
          v-if="isupdate"
          type="primary"
          @click="updateForm('ruleForm')"
          >立即修改</el-button
        >
        <el-button v-else type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { levelList } from "@/api/level";
import { addressList } from "@/api/address";
import { messageAdd } from "@/api/information";
export default {
  data() {
    return {
      isupdate: false,
      fileList: [],
      loading: false,
      levelL: [],
      addressL: [],
      ruleForm: {
        uname: "",
        tel: "",
        addressid: "",
        levelid: "",
        tcoin: "",
        weixin: "",
      },
      rules: {
        uname: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        tel: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        addressid: [
          { required: true, message: "请选择地址", trigger: "change" },
        ],
        levelid: [{ required: true, message: "请选择等级", trigger: "change" }],
      },
    };
  },
  created() {
    this.getDate();
    console.log(this.$route.query);
    if (this.$route.query.id) {
      this.initupdate(this.$route.query.id);
    }
  },
  methods: {
    initupdate(id) {
      this.isupdate = true;
      let _date = 
    },
    sfileSuccess(response) {
      this.ruleForm.tcoin = response.headerurl;
    },

    weixinSuccess(response) {
      this.ruleForm.weixin = response.weixinurl;
    },
    getDate() {
      this.loading = true;
      let promiseLevel = new Promise((rosolve, reject) => {
        levelList().then((res) => {
          this.levelL = res.data.data;
          rosolve(res.data.data);
        });
      });
      let promiseAdress = new Promise((rosolve, reject) => {
        addressList().then((res) => {
          this.addressL = res.data.data;
          rosolve(res.data.data);
        });
      });

      Promise.all([promiseLevel, promiseAdress]).then((res) => {
        this.loading = false;
      });
    },
    updateForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
         
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          messageAdd({
            ...this.ruleForm,
          }).then((res) => {
            this.$router.push("/information/informationlist");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style  scoped>
.app-container {
  width: 500px;
  margin: 50px auto;
}
</style>