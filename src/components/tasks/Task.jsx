import { useNavigate } from "react-router-dom";
import { TaskCard } from "./TaskCard";

export const Tasks = ({ tasks }) => {

    const navigate = useNavigate()

    const handleNavigateToTask = (id) => {

        navigate(`/${id}`);
    }

    return (
        <div>
            {tasks.map((t) => (
                <TaskCard
                    key={t.id}
                    id={t.id}
                    nombre={t.id}
                    fechaInicio={t.id}
                    fechaCierre={t.id}
                    estado={t.id}
                    navigateToTaskHandler={handleNavigateToTask}
                />
            ))}
        </div>
    )
}