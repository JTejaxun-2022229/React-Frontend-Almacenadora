export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.targe.value, field)
    }

    const handleInputOnBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <>
            <div>
                <span>{label}</span>
            </div>
            {textarea ? (
                <textarea
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputOnBlur}
                    rows={5}
                    style={{ maxWidth: '400px' }}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleInputOnBlur}
                />
            )}
            <span>
                {showErrorMessage && validationMessage}
            </span>

        </>
    )
}