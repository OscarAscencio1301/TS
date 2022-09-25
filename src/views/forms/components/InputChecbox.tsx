import { useField } from 'formik'
import React from 'react'
interface InputTextProps {
  label: string,
  name: string,
  [x: string]: any
}

export const InputCheckbox = ({ label, ...rest }: InputTextProps) => {

  const [field, meta] = useField({type: 'checkbox', ...rest})


  return (
    <>
      <label htmlFor="">
        <input type={'checkbox'} {...field} {...rest} />
        {label}
      </label>
      {
        meta.touched && meta.error && (<span>{meta.error}</span>)
      }
    </>
  )
}
