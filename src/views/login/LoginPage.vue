<!--
* @Description: 登录页面
* @Date 2021/03/31 22:14
* @Author L.G.Y
-->
<template>
  <div class="login-container">
    <el-card>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
};
</script>

<style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>