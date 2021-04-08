<template>
  <el-card class="note-calendar">
    <el-calendar v-model="date"></el-calendar>
  </el-card>
</template>

<script>
import { ref } from 'vue';
export default {
  setup () {
    const date = ref(new Date());

    return {
      date
    };
  }
};
</script>

<style scoped>
  .note-calendar {
    width: 483px;
    min-width: 483px;
  }
</style>