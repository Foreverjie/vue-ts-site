<template>
  <div class="home">
    <!-- <Todo /> -->
    <div class="container">
      <Button>test button</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Todo from '../components/Todo.vue';
import Button from '../design/Button.vue';

export default defineComponent({
  name: 'Home',
  components: {
    // Todo,
    Button,
  },
});
</script>
