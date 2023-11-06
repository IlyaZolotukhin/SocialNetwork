import s from './FormsControls.module.css'
import { WrappedFieldProps } from 'redux-form'
import React from "react";

export type TextareaPropsType = {
    placeholder: string
}

export const Textarea: React.FC<WrappedFieldProps & TextareaPropsType> = ({ input, meta, placeholder }) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} placeholder={placeholder} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}