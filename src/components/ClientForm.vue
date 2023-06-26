<template>
  <div class="form">
    <div class="form__fullname">
      <p>
      Введите ФИО (только кириллица, минимум - два слова):
      </p>
      <FormInput v-model="fullname"/>
    </div>
    <div class="form__birth">
      <p>
      Введите дату рождения:
      </p>
      <VueDatePicker
          v-model="dateOfBirth"
          format="dd.MM.yyyy"
          text-input
          placeholder="В формате дд.мм.гггг"
          locale="ru"
          select-text="Выбрать"
          cancel-text="Отменить"
          :state="dateOfBirth ? null : false"
          :enable-time-picker="false"
      ></VueDatePicker>
    </div>
    <div class="form__specialization">
      <p>
      Выберите специализацию:
      </p>
      <FormSelect v-model="spec" :options="options"/>
    </div>
    <div class="form__error" v-show="currentError">
      {{currentError}}
    </div>
    <FlatBtn @click="handleSubmit" class="form__submit">Отправить</FlatBtn>
  </div>
</template>
<script setup>
/* eslint-disable */
import { ref } from "vue";

import FlatBtn from './buttons/FlatBtn'
import FormInput from './inputs/FormInput'
import FormSelect from "@/components/inputs/FormSelect";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import { addNewClient } from './clients'

const props = defineProps({
  options: Array
})

const fullname = ref()
const dateOfBirth = ref()
const spec = ref()
const errors = [
  'ФИО должно содержать хотя 2 слова',
  'Можно использовать только кириллицу',
  'Пожалуйста, заполните все поля'
]
const currentError = ref()

const validateForm = () => {
  const cyrillicPattern = /^[а-яА-ЯёЁ\s-]+$/;

  if (!fullname.value || !dateOfBirth.value || !spec.value) {
    currentError.value = errors[2]
    return false
  }

  if (!(fullname.value.trim().indexOf(' ') !== -1)) {
    currentError.value = errors[0]
    return false
  }

  if (!cyrillicPattern.test(fullname.value)) {
    currentError.value = errors[1]
    return false
  }

  return true
}
const handleSubmit = () => {
  if (validateForm()) {
    currentError.value = null
    addNewClient(fullname.value, dateOfBirth.value, spec.value)
  }
}
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  text-align: start;
  width: 50%;
  padding-bottom: 20px;
}

p {
  margin: 0;
  padding-bottom: 10px;
}

.form__error {
  color: red;
}

.form__submit {
  margin-top: 15px;
}
</style>
