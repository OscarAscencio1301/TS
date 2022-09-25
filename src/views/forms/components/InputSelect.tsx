import { useField } from 'formik'
import React from 'react'
interface InputSelectProps {
    label: string,
    name: string,
    [x:string]: any
}

export const InputSelect = ({label, ...rest}:InputSelectProps) => {

    const [field, meta] = useField(rest)

    console.log(field)
    console.log(meta)


  return (
    <>
    <label htmlFor="">{label}</label>
    <select {...field} {...rest} />
    {
        meta.touched &&	meta.error && (<span>{meta.error}</span>)			
    }
    </>
  )
}
