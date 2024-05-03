export const TaskCard = ({
    nombre,
    id,
    fechaCierre,
    estado,
    navigateToTaskHandler
}) => {

    const handleNavigate = () => {

        navigateToTaskHandler(id);
    };

    let statusColor;

    switch (estado) {

        case 'pendiente':
            statusColor = 'yellow';
            break;
        case 'terminada':
            statusColor = 'green';
            break;
        case 'cancelada':
            statusColor = 'red';
            break;
        default:
            statusColor = 'black';
    }

    return (

        <div className="task-card" onClick={handleNavigate}>
            <span className="task-card-title">{nombre}</span>
            <span className="task-card-description">{fechaCierre}</span>
            <span className="task-card-status" style={{ color: statusColor }}>
                {estado === 'completada' ? 'Completada' : (estado === 'pendiente' ? 'Pendiente' : 'Cancelada')}
            </span>
            <div className="task-buttons">
                <button>Botón 1</button>
                <button>Botón 2</button>
                <button>Botón 3</button>
                <button>Botón 4</button>
            </div>
        </div>
    );
};
