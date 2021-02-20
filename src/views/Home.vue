<template>
  <div class="home">
    <Todo msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Todo from '../components/Todo.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Todo,
  },
});
</script>
