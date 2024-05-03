import axios from "axios";

const apiClient = axios.create({
    
    baseURL: 'http://127.0.0.1:3110/storage/v1'

})

export const postTask = async (data) => {
    try {
        return await apiClient.post('/task', data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getTasks = async () => {
    try {
        return await apiClient.get(`/task`)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const updatTask = async (data) => {
    try {
        return await apiClient.put(`/task/:id`, data)
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const deleteTask = async (data) => {
    try {
        return await apiClient.delete(`/task/:id`, data)
    } catch (e) {
        return {
            errro: true,
            e
        }
    }
}

export const completeTask = async (data) => {
    try {
        return await apiClient.patch(`/task/:id`, data)
    } catch (e) {
        return {
            errro: true,
            e
        }
    }
}