<template>
  <div class="modal">
    <div>
      Изменить значение {{dictionary[props.selectedKey]}} у {{ props.name }}?
      <FormInput v-model="value"/>
      <div class="error" v-if="currentError">
        {{currentError}}
      </div>
      <div class="modal__footer">
        <FlatBtn @click="$emit('close')">
          Закрыть
        </FlatBtn>
        <FlatBtn @click="saveChanges" colored>
          Подтвердить
        </FlatBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
/* eslint-disable */
import { ref } from "vue";
import FormInput from "@/components/inputs/FormInput";
import FlatBtn from '@/components/buttons/FlatBtn'
import { editClient } from '@/components/clients'

const props = defineProps({
  id: Number,
  selectedKey: String,
  name: String
})
const emit = defineEmits(['close'])

const value = ref('')
const currentError = ref()
const dictionary = {
  name: 'ФИО',
  importance: 'важность'
}

const validateName = () => {
  const cyrillicPattern = /^[а-яА-ЯёЁ\s-]+$/;

  if (!cyrillicPattern.test(value.value)) {
    currentError.value = 'Можно использовать только кириллицу'
    return false
  }

  if (!(value.value.trim().indexOf(' ') !== -1)) {
    currentError.value = 'ФИО должно содержать хотя 2 слова'
    return false
  }

  return true
}

const validateImportance = () => {
  return (parseInt(value.value) < 4 && parseInt(value.value) > 0)
}

const saveChanges = () => {
  switch(props.selectedKey) {
    case 'name':
      if (validateName()) break;
      else return
    case 'importance':
      if (validateImportance()) break;
      else return
  }
  currentError.value = ''
  editClient(props.id, props.selectedKey, value.value)
  emit('close')
}
</script>
<style scoped>
.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
}
.modal > div {
  background-color: rgba(255, 255, 255);
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal__footer {
  display: flex;
  flex-direction: row;
  justify-items: flex-end;
  gap: 10px;
}

.error {
  color: red;
}
</style>
