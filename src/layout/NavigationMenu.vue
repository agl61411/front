<template>
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template v-slot:title>我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template v-slot:title>选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      <i class="el-icon-s-operation"/>
    </el-button>
    <el-drawer
      title="我是标题"
      :model:drawer="drawer"
      direction="rtl">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  setup () {
    const handleSelect = () => {};

    const state = reactive({
      activeIndex: '1',
      activeIndex2: '1',
      drawer: false
    });

    return {
      handleSelect,
      ...state
    };
  }
};
</script>

<style scoped>

</style>