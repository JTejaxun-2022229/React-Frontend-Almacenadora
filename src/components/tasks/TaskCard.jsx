
export const TaskCard = ({ nombre, id, fechaInicio, fechaCierre, estado, navigateToTaskHandler }) => {

    const handleNaviagate = () => {

        navigateToTaskHandler(id)
    }

    return (
        <div onClick={handleNaviagate}>
            <span>{nombre}</span>
            <span>{fechaInicio}</span>
            <span>{fechaCierre}</span>
            <span style={{ color: estado === 'pendiente' ? 'yellow' : estado === 'completada' ? 'green' : estado === 'incompleta' ? 'orange' : estado === 'cancelada' ? 'red' : '' }}>
                {estado.charAt(0).toUpperCase() + estado.slice(1)}
            </span>
        </div>
    )
}