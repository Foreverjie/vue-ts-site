<template>
  <h1>Todo List</h1>
  <div class="container">
    <div class="todo new-bucket">
      <a-button class="todo-item" type="primary" shape="round">New</a-button>
      <a-button class="todo-item" type="primary" shape="round">asdasd</a-button>
      <a-button class="todo-item" type="primary" shape="round">Nefffffw</a-button>
      <a-button class="todo-item" type="primary" shape="round">Nwew</a-button>
      <a-button class="todo-item" type="primary" shape="round">Nwew</a-button>
      <a-button class="todo-item" type="primary" shape="round">Nwew</a-button>

    </div>
    <a-divider type="vertical" />
    <div class="todo processing-bucket">
      <a-button class="todo-item processing" shape="round">asdasd</a-button>
      <a-button class="todo-item processing" shape="round">asdasd</a-button>
      <a-button class="todo-item processing" shape="round">asdasd</a-button>
      <a-button class="todo-item processing" shape="round">asdasd</a-button>
      <a-button class="todo-item processing" shape="round">asdasd</a-button>

    </div>
    <a-divider type="vertical" />
    <div class="todo finished-bucket">
      <a-button class="todo-item finished"  shape="round">New</a-button>
      <a-button class="todo-item finished"  shape="round">New</a-button>
      <a-button class="todo-item finished"  shape="round">New</a-button>
      <a-button class="todo-item finished"  shape="round">New</a-button>
      <a-button class="todo-item finished"  shape="round">New</a-button>
      <a-button class="todo-item finished"  shape="round">New</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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

  div {
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

  // .new {
  //   background-color: rgb(255, 166, 0);
  // }

  // .processing {
  // }

  // .finished {
  // }
}
</style>
