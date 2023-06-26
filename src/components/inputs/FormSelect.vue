<template>
  <div class="select">
    <select v-model="vModel">
      <option v-for="option in options" :value="option.code" :key="option.code">
        {{option.value}}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed } from "vue";
/* eslint-disable */
const props = defineProps({
  modelValue: String,
  options: Array
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
