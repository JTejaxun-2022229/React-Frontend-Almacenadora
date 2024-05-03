import { useState } from "react";
import { Input } from "../general/Input";
import { DatePicker } from "../general/DatePicker";

const inputs = [
    {
        field: "nombre",
        label: "Nombre",
        type: "text",
    },
    {
        field: "descripcion",
        label: "Descripción",
        type: "text",
    },
    {
        field: "nombreResponsable",
        label: "Nombre del Responsable",
        type: "text",
    },
    {
        field: "description",
        label: "Descripción",
        type: "text",
    },
    {
        field: "status",
        label: "Estado",
        type: "multiSelect",
        options: ['pendiente', 'terminada', 'cancelada'],
    },
    {
        field: "fechaInicio",
        label: "Fecha de Inicio",
        type: "datePicker",
    },
    {
        field: "fechaCierre",
        label: "Fecha de Cierre",
        type: "datePicker",
    },
];

export const TasksSettings = ({ settingTask, saveTask }) => {
    const [formState, setFormState] = useState({
        nombre: {
            value: settingTask.nombre,
            isValid: false,
            showError: false
        },
        descripcion: {
            value: settingTask.descripcion,
            isValid: false,
            showError: false,
        },
        fechaInicio: {
            value: settingTask.fechaInicio,
            isValid: true,
            showError: false,
        },
        fechaCierre: {
            value: settingTask.fechaCierre,
            isValid: true,
            showError: false,
        },
        nombreResponsable: {
            value: settingTask.nombreResponsable,
            isValid: false,
            showError: false,
        },  

        status: {
            value: settingTask.status || [], 
            isValid: true, 
            showError: false,
            
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value,
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

    const handleTask = (event) => {
        event.preventDefault();

        saveTask(
            formState.nombre.value,
            formState.descripcion.value,
            formState.fechaInicio.value,
            formState.fechaCierre.value,
            formState.nombreResponsable.value
        );
    };

    return (
        <div>
            <form>
                {inputs.map((input) => (
                    <React.Fragment key={input.field}>
                        {input.type === "datePicker" ? (
                            <React.Fragment>
                                <label>{input.label}</label>
                                <DatePickerComponent
                                    selected={formState[input.field].value}
                                    onChange={input.field === "fechaInicio" ? handleStartDateChange : handleEndDateChange}
                                    onBlurHandler={handleInputValidationOnBlur}
                                />
                            </React.Fragment>
                        ) : input.type === "multiSelect" ? (
                            <React.Fragment>
                                <label>{input.label}</label>
                                <select
                                    multiple
                                    value={formState[input.field].value}
                                    onChange={(event) => handleInputValueChange(Array.from(event.target.selectedOptions, option => option.value), input.field)}
                                    onBlur={(event) => handleInputValidationOnBlur(Array.from(event.target.selectedOptions, option => option.value), input.field)}
                                >
                                    {input.options.map(option => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            </React.Fragment>
                        ) : (
                            <Input
                                field={input.field}
                                label={input.label}
                                value={formState[input.field].value}
                                onChangeHandler={handleInputValueChange}
                                type={input.type}
                                onBlurHandler={handleInputValidationOnBlur}
                            />
                        )}
                    </React.Fragment>
                ))}
                <button onClick={handleTask}>
                    Add
                </button>
            </form>
        </div>
    );
};