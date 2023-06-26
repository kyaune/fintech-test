<template>
  <div class="main">
    <ClientForm :options="specsList"/>
    <ClientsList v-if="clients.length"/>
    <div v-else class="placeholder-text">Добавьте первого клиента, чтобы появилась таблица</div>
  </div>
</template>
<script setup>
import { onBeforeMount, ref } from "vue";
import { getSpecs } from '@/boot/axios'
import { clients } from '@/components/clients'
import ClientForm from "@/components/ClientForm";
import ClientsList from "@/components/ClientsList";

const specsList = ref()

onBeforeMount( async() => {
  specsList.value = await getSpecs()
})
</script>
<style scoped>
.main {
  padding: 20px 80px;
  box-shadow: 6px -6px 10px 2px rgba(34, 60, 80, 0.2);
  background-color: rgb(246, 242, 242);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.placeholder-text {
  font-style: italic;
  font-weight: bold;
  font-size: 20px;
}
</style>
