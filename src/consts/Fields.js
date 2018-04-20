import React from 'react';

export const renderField = ({
    input,
    label,
    type,
    min,
    max,
    meta: { touched, error, warning }
}) => (
        <div>
            <label>{label}</label>
                <input {...input} type={type} placeholder={`Podaj ${label}`} min={min} max={max} />
                {touched && ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
    )

