import { useState } from "react";
import { getTasks as getTaskRequest } from "../../services";
import toast from "react-hot-toast";

export const useTaskDetails = () => {
    const [askDetails, setAskDetails] = useState();

    const getTasks = async () => {

        const responseData = await getTaskRequest();

        if(responseData.error){
            return toast.error(
                responseData.e?.response?.data ||
                'Error loading channel information'
            )
        }

        setAskDetails(responseData)

    }

    return{
        askDetails,
        isFetching: !askDetails,
        getTasks
    }
}

