import { useState } from "react"
import toast from "react-hot-toast"
import { getTasks as getTaskRequest } from "../../services"

export const useTask = () => {
    const [task, setTask] = useState([]);

    const getTask = async () => {
        const tasksData = await getTaskRequest()
        if (tasksData.error) {
            return toast.error(
                tasksData.e?.response?.data || 'Error ocurred when reading tasks'
            )
        }

        setTask({
            tasks: tasksData.data.task
        })
    }

    return {
        getTask,
        isFetching: !Boolean(task),
        allTask: task?.task
    }
}