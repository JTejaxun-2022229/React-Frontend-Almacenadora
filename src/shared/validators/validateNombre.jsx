export const validateNombre = (nombre) => {

    const regex = /^[\s\S]{8,50}$/

    return regex.test=(nombre)
}

export const validateNombreMessagge = 'El nombre de la tarea debe de contener entre 8 y 50 caracteres'