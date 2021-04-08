<template>
  <div class="note-page">
    <note-calendar ref="calendar" />
    <note-info />
  </div>
</template>

<script>
import NoteCalendar from './components/NoteCalendar';
import NoteInfo from './components/NoteInfo';

export default {
  components: { NoteCalendar, NoteInfo },
  setup () {
    const calendar = ref();

    return {
      calendar
    };
  }
};
</script>

<style scoped>
  .note-page {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
</style>