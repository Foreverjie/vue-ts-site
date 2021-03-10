<template>
  <div class="button">
      <div class="content">
        <slot />
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
  },
});
</script>

<style scoped lang="less">
.button {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 41px;
  cursor: pointer;

  width: 252px;
  height: 72px;
  left: 208px;
  top: 1062px;

  /* Primary */
  background: @blue;
  border-radius: 8px;
}
.button:hover {
  background: ;
}
.content {
  position: static;
  width: 170px;
  height: 36px;
  left: 41px;
  top: 18px;

  /* Button */

  font-family: Helvetica Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 120%;
  /* identical to box height, or 36px */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;

  /* White */
  color: #FFFFFF;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}
</style>
