import React, { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegistrForm = () => {
    const {form, changeEvent, isValidEmail} = useForm({
        nombre: '',
        email: '',
        password1: '',
        password2: '',
    })

    const snedForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(nombre.trim().length <= 0 || !isValidEmail(email) || password1.trim().length <= 0 || password1 !==  password2){
            return
        }
        console.log(form);
    }

    const {nombre, email, password1, password2} = form

  return (
    <div>
        <h1>Registr Page</h1>
        <form onSubmit={snedForm} noValidate>
            <input type="text" placeholder={nombre.trim().length <= 0 ? 'El Nombre es Obligatorio' : 'Nombre'} name='nombre' value={nombre} onChange={changeEvent} className={`${nombre.trim().length <= 0 && 'has-error'}`} />
            <input type="email" placeholder='Email' name='email' value={email} onChange={changeEvent} />
            {!isValidEmail(email) && <span>El email no es valido</span>}
            <input type="password" placeholder='Password1' name='password1' value={password1} onChange={changeEvent} />
            {password1.trim().length <= 0 && <span>La contraseña es obligatoria</span>}
            <input type="passwrod" placeholder='Password2' name='password2' value={password2} onChange={changeEvent} />
            {password2.trim().length <= 0 && <span>LLa contraseña es obligatoria</span>}
            {password1 !==  password2 && <span>Las contraseñas no coinciden</span>}
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}
