<template>
  <div class="list">
    <div class="list__header">
      <span class="element">
        ИД клиента
      </span>
      <span class="element">
        ФИО
      </span>
      <span class="element">
        Дата рождения
      </span>
      <span class="element">
        Код специализации
      </span>
      <span class="element">
        Важность
      </span>
    </div>
    <div class="list__body">
      <div class="list__element" v-for="client in clients" :key="client.id">
        <div class="element__container">
          <div class="element">
            {{client.id}}
          </div>
          <div class="element">
            <div class="edit" @click="editValue(client.id, 'name', client.name)">
            </div>
            {{client.name}}
          </div>
          <div class="element">
            {{client.date.toISOString().split('T')[0]}}
          </div>
          <div class="element">
            {{client.spec}}
          </div>
          <div class="element">
            <div class="edit" @click="editValue(client.id, 'importance', client.name)">
            </div>
            {{client.importance}}
          </div>
          <div class="delete" @click="deleteClient(client.id)">
          </div>
        </div>
      </div>
    </div>
    <teleport to="body">
      <FormModal
          v-if="modalOpen"
          :id="selectedId"
          :selectedKey="selectedKey"
          :name="selectedName"
          @close="modalOpen = false"
      />
    </teleport>
  </div>
</template>
<script setup>
import { clients, deleteClient } from "@/components/clients";
import FormModal from "@/components/modals/FormModal";
import { ref } from "vue";

const modalOpen = ref(false)
const selectedId = ref()
const selectedKey = ref()
const selectedName = ref()

const editValue = (id, key, name) => {
  selectedId.value = id
  selectedKey.value = key
  selectedName.value = name
  modalOpen.value = true
}
</script>
<style scoped>
.list {
  padding-top: 20px;
  vertical-align: center;
}

.list__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.list__element {
  display: flex;
  flex-direction: row;
}
.element__container {
  flex: 1 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.element {
  outline: 1px rgb(200,5,15) solid;
  padding: 4px 0;
  margin-top: 1px;
  margin-left: 1px;
  flex: 0 0 20%;
}

.delete {
  flex-shrink: 0;
  margin: 5px 0 0 5px;
  background: url("../../public/trash-can.svg");
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.edit {
  display: inline-block;
  background: url("../../public/icon-edit.svg");
  position: relative;
  top: 3px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
