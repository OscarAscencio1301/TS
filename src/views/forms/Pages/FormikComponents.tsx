import { ErrorMessage, Field, Form, Formik } from 'formik'
import '../styles/styles.css'
import * as Yup from 'yup'

interface PropsForm {
    first: string;
    last: string;
    email: string;

}

export const FormikComponents = () => {



    // const formik = useFormik({
    //     initialValues: {
    //         first: '',
    //         last: '',
    //         email: '',
    //     },
    //     onSubmit: (values) => {
    //         console.log(values)
    //     },
    //     validationSchema: Yup.object({
    //         first: Yup.string().required('El valor es requerido').max(10,'Debe de ser mayor a 10'),
    //         last:   Yup.string().required('El valor es requerido').max(10,'Debe de ser mayor a 10'),
    //         email:   Yup.string().required('El valor es requerido').email('El valor debe de ser email'),
    //     })

    // })
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
                        <label htmlFor="">First Name</label>
                        <Field name="first" type="text" />
                        <ErrorMessage name="first" component={'span'} />


                        <label htmlFor="">First Name</label>
                        <Field name="last" type="text" />
                        <ErrorMessage name="last" component={'span'} />

                        <label htmlFor="">First Name</label>
                        <Field name="email" type="email" />
                        <ErrorMessage name="email" component={'span'} />


                        <label htmlFor="">Empleos</label>
                        <Field as="select" name="job">
                            <option value="">Slecciona tu empleo</option>
                            <option value="prog1">Programador 1</option>
                            <option value="prog2">Programador 2</option>
                            <option value="prog3">Programador 3</option>
                            <option value="prog4">Programador 4</option>
                            <option value="prog5">Programador 5</option>
                        </Field>
                        <ErrorMessage name="job" component={'span'} />

                        <label>
                            <Field name="terms" type="checkbox" />
                            Terms and Conditions
                        </label>
                        <ErrorMessage name="terms" component={'span'} />


                        <button type="submit">Enviar</button>

                    </Form>
                )
            }

        </Formik>
    )
}
