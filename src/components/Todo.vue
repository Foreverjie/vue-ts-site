<template>
  <h1>Todo List</h1>
    <div class="container">
      <perfect-scrollbar>
        <div class="todo new-bucket">
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
          <Capsule type="new">new todo slot</Capsule>
        </div>
      </perfect-scrollbar>
      <a-divider class="divider" type="vertical" />
      <div class="todo processing-bucket">
        <Capsule type="processing">processing todo slot</Capsule>
        <Capsule type="processing">processing todo slot</Capsule>
        <Capsule type="processing">processing todo slot</Capsule>
        <Capsule type="processing">processing todo slot</Capsule>
      </div>
      <a-divider class="divider" type="vertical" />
      <div class="todo finished-bucket">
        <Capsule type="finished">finished todo slot</Capsule>
        <Capsule type="finished">finished todo slot</Capsule>
        <Capsule type="finished">finished todo slot</Capsule>
        <Capsule type="finished">finished todo slot</Capsule>
      </div>
    </div>
</template>

<script lang="ts">
import Capsule from '@/design/Capsule.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Capsule },
  name: 'Todo',
  props: {
    msg: String,
  },
});
</script>

<style scoped lang="less">
h1 {
  margin: 2vh 0;
}

.container {
  margin: 2vh 0;
  padding: 10vh 5vw;
  height: 60vh;
  justify-content: center;
  display: flex;

  .divider {
    display: inline-block;
    height: 100%;
  }

  .todo {
    margin: 0 4vw;
    width: 20vw;
    padding: 0;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    overflow-y: auto;

    .todo-item {
      margin: 1em;
    }

    .new {
      background-color: #4192f7;
    }

    .processing {
      background-color: #ed5b56;
    }

    .finished {
      background-color: #71be46;
    }
  }

  // .new-bucket {
  //   background-color: rgb(255, 166, 0);
  // }

  // .processing {
  // }

  // .finished {
  // }
}
</style>
