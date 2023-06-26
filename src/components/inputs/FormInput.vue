<template>
  <div class="form-input">
    <input type="text" v-model="vModel"/>
  </div>
</template>
<script setup>
import { computed } from "vue";
/* eslint-disable */
const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

const vModel = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val);
  }
})
</script>
