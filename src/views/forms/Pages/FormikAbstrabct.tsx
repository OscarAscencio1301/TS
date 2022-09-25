import { ErrorMessage, Field, Form, Formik } from 'formik'
import '../styles/styles.css'
import * as Yup from 'yup'
import { InputCheckbox, InputSelect, InputText } from '../components'


export const FormikAbtract = () => {
    return (
        <Formik initialValues={{
            first: '',
            last: '',
            email: '',
            terms: false,
            job: ''
        }} onSubmit={(values) => {
            console.log(values)
        }} validationSchema={Yup.object({
            first: Yup.string().required('El valor es requerido').max(10, 'Debe de ser mayor a 10'),
            last: Yup.string().required('El valor es requerido').max(10, 'Debe de ser mayor a 10'),
            email: Yup.string().required('El valor es requerido').email('El valor debe de ser email'),
            terms: Yup.boolean().isTrue('Debes aceptar terminos y condiciones'),
            job: Yup.string().required('El valor es requerido').notOneOf(['prog5'], 'El programador 5 no se puede seleccionar'),
        })}>
            {
                formik => (
                    // <h1>Formik Components</h1>
                    <Form>
                        {/* <label htmlFor="">First Name</label>
                        <Field name="first" type="text" />
                        <ErrorMessage name="first" component={'span'} /> */}
                        <InputText label={'First Name'} name={'first'} />

                        {/* 
                        <label htmlFor="">Last Name</label>
                        <Field name="last" type="text" />
                        <ErrorMessage name="last" component={'span'} />
 */}

                        <InputText label={'Last Name'} name={'last'} />
                        {/*
                        <label htmlFor="">Email Name</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component={'span'} />
                        
*/}
                        <InputText label={'Email Name'} name={'email'} type={'email'} />

                        {/* <label htmlFor="">Empleos</label>
                        <Field as="select" name="job">
                            <option value="">Slecciona tu empleo</option>
                            <option value="prog1">Programador 1</option>
                            <option value="prog2">Programador 2</option>
                            <option value="prog3">Programador 3</option>
                            <option value="prog4">Programador 4</option>
                            <option value="prog5">Programador 5</option>
                        </Field>
                        <ErrorMessage name="job" component={'span'} /> */}

                        <InputSelect label={'Empleos'} name={'job'} >
                            <option value="">Slecciona tu empleo</option>
                            <option value="prog1">Programador 1</option>
                            <option value="prog2">Programador 2</option>
                            <option value="prog3">Programador 3</option>
                            <option value="prog4">Programador 4</option>
                            <option value="prog5">Programador 5</option>
                        </InputSelect>

                        <InputCheckbox label={'Aceptar Terminos y Condiciones'} name={'terms'} />

                        <button type="submit">Enviar</button>

                    </Form>
                )
            }

        </Formik>
    )
}
