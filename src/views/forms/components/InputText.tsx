import { useField } from 'formik'
import React from 'react'
interface InputTextProps {
    label: string,
    name: string,
    type?: 'text' | 'email' | 'number',
    [x:string]: any
}

export const InputText = ({label, ...rest}:InputTextProps) => {

    const [field, meta] = useField(rest)


  return (
    <>
    <label htmlFor="">{label}</label>
    <input type={rest.type} {...field} {...rest} />
    {
        meta.touched &&	meta.error && (<span>{meta.error}</span>)			
    }
    </>
  )
}
