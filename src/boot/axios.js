import axios from "axios"

const BASE_URL = 'https://pp.credit/Services/BrokerService/api/Application'

const getSpecs = async() => {
    const resp =  await axios.post(
        `${BASE_URL}/Dictionary`,
        {
            "dictName": "ARM_OccupationArea"
        })
    return resp.data.description
}

export {
    getSpecs
}
