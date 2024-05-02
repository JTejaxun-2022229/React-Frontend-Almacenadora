
export const TaskDescription = ({ nombre, descripcion, fechaInicio, fechaCierre, nombreResponsable, estado }) => {

    return (

        <div >
            <span>{nombre}</span>
            <span >{descripcion}</span>
            <span >{fechaInicio}</span>
            <span >{fechaCierre}</span>
            <span >{nombreResponsable}</span>
            <span >{estado}</span>
        </div>
    )
}