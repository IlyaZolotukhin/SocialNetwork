import s from './FormsControls.module.css'
import { WrappedFieldProps } from 'redux-form'
import React from "react";

export type PropsType = {
    placeholder: string
}
export type FormControlPropsType = WrappedFieldProps & PropsType


const FormControl: React.FC<FormControlPropsType> = ({ input, meta,...props }) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea= (props:FormControlPropsType) => {
    return <FormControl {...props}><textarea {...props.input} placeholder={props.placeholder} /></FormControl>
}

export const Input = (props:FormControlPropsType) => {
    return <FormControl {...props}><input {...props.input} placeholder={props.placeholder} /></FormControl>
}