<template>
  <div class="wrapper">
    <div :class="type" class="item">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Capsule',
  props: {
    type: String,
  },
});
</script>

<style scoped lang="less">
.wrapper{
  display: inline-block;
  margin: 0.5em;
  transition: all 0.6s;

  .item {
    padding: 0.5em;
    border-radius: 9999px;
    width: fit-content;
    height: fit-content;
    color: white;
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

.wrapper:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>
