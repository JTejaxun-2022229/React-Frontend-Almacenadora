import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/storage/v1'

})


export const postTask = async(data)=> {
    try {
        return await apiClient.post('/task', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
} 

export const getTasks = async() => {
    try {
        return await apiClient.get(`/`)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const updateAsk = async (data) => {
    try {
        return await apiClient.put(`/`, data)
    } catch (e) {
        return {
            error: true, 
            e
        }
    }
}

export const deleteAsk = async (data) => {
    try {
        return await apiClient.put(`/`, data)
    } catch (e) {
        return{
            errro: true,
            e
        }
    }
}