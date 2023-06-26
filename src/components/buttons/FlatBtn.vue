<template>
  <div class="btn" :class="{'colored': colored}">
    <slot class="btn__text">

    </slot>
  </div>
</template>
<script setup>
/* eslint-disable */

defineProps({
      colored: Boolean
    }
)
</script>
<style scoped>
.btn {
  width: 100%;
  padding: 6px 12px;
  border-radius: 8px;
  border: 2px solid transparent;
  background-color: rgb(226, 229, 235);
  color: rgb(0, 0, 0);
  transition: 400ms ease 0s;
  cursor: pointer;
  text-align: center;
}

.btn:hover {
  background-color: rgb(200,5,15);
  color: rgb(255, 255, 255);
}

.colored {
  background-color: rgb(200,5,15);
  color: rgb(255, 255, 255);
}

.btn__text {
  font-size: 12px;
  font-weight: 400;
}
</style>
