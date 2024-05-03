import { TaskCard } from './TaskCard';
import { useNavigate } from 'react-router-dom';

export const Tasks = ({ tasks }) => {

    const navigate = useNavigate();

    const handleNavigateToTask = (id) => {

        navigate(`/${id}`);
    };

    return (

        <div className="task-container">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    id={task.id}
                    nombre={task.nombre}
                    fechaCierre={task.fechaCierre}
                    estado={task.estado}
                    navigateToTaskHandler={handleNavigateToTask}
                />
            ))}
        </div>
    );
};