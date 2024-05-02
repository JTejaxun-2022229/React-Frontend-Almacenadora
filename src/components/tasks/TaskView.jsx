import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { TaskDescription } from "./TaskDescription";
//import { useTaskDetails } from "../../shared/hooks";
import { LoadingSpinner } from "../LoadingSpinner";


export const ChannelView = ({getTasks}) => {

    const { isFetching, getTaskDetails, taskDetails } = useTaskDetails();

    const { id } = useParams()

    console.log(getTasks)

    useEffect(() => {
        getTaskDetails(id)
    }, [])

    if(isFetching){
        return <LoadingSpinner/>
    }

    return(
        <div >
            <div >
                
            </div>
        </div>
    )
}