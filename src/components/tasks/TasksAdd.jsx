import { useState } from "react";
import { Input } from "../general/Input";
import { DatePickerComponent } from "../general/DatePicker";

import { useTaskAdd } from "../../shared/hooks/useTaskAdd";

export const TasksAdd = ({ switchTaskHandler }) => {
    const { task, isLoading } = useTaskAdd();

    const [formState, setFormState] = useState({

        nombre: {
            value: "",
            isValid: false,
            showError: false
        },
        descripcion: {
            value: "",
            isValid: false,
            showError: false,
        },
        fechaInicio: {
            value: new Date(),
            isValid: true,
            showError: false,
        },
        fechaCierre: {
            value: new Date(),
            isValid: true,
            showError: false,
        },
        nombreResponsable: {
            value: "",
            isValid: false,
            showError: false,
        }
       
    })


    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
            },
        }));
    };

    const handleStartDateChange = (date) => {
        setFormState((prevState) => ({
            ...prevState,
            fechaInicio: {
                ...prevState.fechaInicio,
                value: date,
            },
        }));
    };

    const handleEndDateChange = (date) => {
        setFormState((prevState) => ({
            ...prevState,
            fechaCierre: {
                ...prevState.fechaCierre,
                value: date,
            },
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "nombre":
            case "descripcion":
            case "nombreResponsable":
                isValid = value.trim() !== "";
                break;
            case "fechaInicio":
            case "fechaCierre":
                isValid = value !== null && value !== undefined;
                break;
            default:
                break;
        }

     

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid,
            },
        }));

        
    };


    const handleCancel = () => {
        navigate('/');
    };

    const handleTask = (event) => {
        event.preventDefault();
        
        task(
            formState.nombre.value,
            formState.descripcion.value,
            formState.fechaInicio.value,
            formState.fechaCierre.value,
            formState.nombreResponsable.value
        );
    };

    const isSubmitButtonDisabled = isLoading ||
        !formState.nombre.isValid ||
        !formState.descripcion.isValid ||
        !formState.fechaInicio.isValid ||
        !formState.fechaCierre.isValid ||
        !formState.nombreResponsable.isValid;

    return (
        <div>
            <form>
                <Input
                    field="nombre"
                    label="nombre"
                    value={formState.nombre.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}

                />
                <Input
                    field="descripcion"
                    label="descripcion"
                    value={formState.descripcion.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                />
                <label>Fecha de Inicio</label>
                <DatePickerComponent
                    selected={formState.fechaInicio.value}
                    onChange={handleStartDateChange}
                    onBlurHandler={handleInputValidationOnBlur}

                />
                <label>Fecha de Finalizacion</label>
                <DatePickerComponent
                    selected={formState.fechaCierre.value}
                    onChange={handleEndDateChange}
                    onBlurHandler={handleInputValidationOnBlur}

                />
                <Input
                    field="nombreResponsable"
                    label="nombreResponsable"
                    value={formState.nombreResponsable.value}
                    onChangeHandler={handleInputValueChange}
                    type="text"
                    onBlurHandler={handleInputValidationOnBlur}
                />
                <button onClick={handleTask} disabled={isSubmitButtonDisabled}  >
                    Add
                </button>

                <button onClick={handleCancel}>Cancelar</button>
            </form>
        </div>
    )
}

