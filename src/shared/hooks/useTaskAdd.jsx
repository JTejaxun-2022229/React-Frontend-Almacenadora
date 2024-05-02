import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTask as postTaskRequest} from "../../services";
import toast from "react-hot-toast";

export const useTaskAdd = () => {
    const [ isLoading, setIsLoading ] = useState(false);

    const navigate = useNavigate();

    const task = async( nombre, descripcion, fechaInicio, fechaCierre, nombreResponsable, estado) => {

        setIsLoading(true);

        const response = await taskRquest ({
            nombre,
            descripcion,
            fechaInicio,
            fechaCierre,
            nombreResponsable,
            estado
        });

        setIsLoading(false);
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'An error occurred while logging in'
            )
        }

        const { userDatils } = response.data

        localStorage.setItem('user', JSON.stringify(userDatils))

        navigate('/')
    }

    return{
        task,
        isLoading
    }
}