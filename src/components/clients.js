import { ref } from 'vue'

const clients = ref([])

const addNewClient = (name, date, spec) => {
    const id = Date.now()
    const importance = Math.floor(1+ Math.random() * 3)
    clients.value.push({id, name, date, spec, importance})
}

const deleteClient = (id) => {
    const objWithIndex = clients.value.findIndex((obj) => obj.id === id)
    clients.value.splice(objWithIndex, 1)
}

const editClient = (id, key, value) => {
    const objWithIndex = clients.value.findIndex((obj) => obj.id === id)
    clients.value[objWithIndex][`${key}`] = value
}
export {
    clients,
    addNewClient,
    deleteClient,
    editClient
}

