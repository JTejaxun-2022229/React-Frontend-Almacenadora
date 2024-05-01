import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/storage/v1/task',
    timeout: 5000
})

export const addTask = async (data) => {
    try{
        return await apiClient.post('/', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getTask = async () => {
    try{
        return await apiClient.get('/')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getTaskPendiente = async () => {
    try{
        return await apiClient.get('?estado=pendiente')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getTaskCompletada = async () => {
    try{
        return await apiClient.get('?estado=completada')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getTaskTerminada = async () => {
    try{
        return await apiClient.get('?estado=terminada')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const getTaskCancelada = async () => {
    try{
        return await apiClient.get('?estado=cancelada')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const updateTask = async (data) => {
    try{
        return await apiClient.put('/:id', data)
    }catch(e){
        return{
            error: true,
            e
        }
    }
}

export const deleteTask = async () => {
    try{
        return await apiClient.get('/:id')
    }catch(e){
        return{
            error: true,
            e
        }
    }
}
