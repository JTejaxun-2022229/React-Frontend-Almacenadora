import { useState, useEffect} from 'react'
import toast from 'react-hot-toast'
import { getTasks, updateAsk } from '../../services'

export const useTaskSetting = () => {
    const [ taskSetting, setTaskSetting ] = useState();

    const fetchTaskSetting = async () => {
        const  response = await getTasks();

        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'An error occurred while obtaining channel data'
            )
        }

        setTaskSetting({
            nombre: response.data.nombre,
            descripcion: response.data.descripcion,
            fechaInicio: response.data.fechaInicio, 
            fechaCierre: response.data.fechaCierre, 
            nombreResponsable: response.data.nombreResponsable, 
            estado: response.data.estado 
        })

    }

    const saveTask = async(data) => {
        const response = await updateAsk(data);

        if(response.error){
            return toast.error(
                response.e?.response?.data ||
                'Error updating information'
            )
        }

        toast.success('The information entered correctly')
    }

    useEffect(() =>{
        fetchTaskSetting();
    }, [])

    return {
        isFetching: !taskSetting,
        taskSetting,
        saveTask
      }
}