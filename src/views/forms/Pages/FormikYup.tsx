import { useFormik } from 'formik'
import '../styles/styles.css'
import * as Yup from 'yup'

interface PropsForm {
    first: string;
    last: string;
    email: string;

}

export const FormikYup= () => {



    const formik = useFormik({
        initialValues: {
            first: '',
            last: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            first: Yup.string().required('El valor es requerido').max(10,'Debe de ser mayor a 10'),
            last:   Yup.string().required('El valor es requerido').max(10,'Debe de ser mayor a 10'),
            email:   Yup.string().required('El valor es requerido').email('El valor debe de ser email'),
        })

    })
    return (
        <div>
            <h1>Formik Yup</h1>
            <form onSubmit={formik.handleSubmit} noValidate>
                <label htmlFor="">First Name</label>
                <input type="text" {...formik.getFieldProps('first')} />
                {formik.touched.first && formik.errors.first && <span>{formik.errors.first}</span>}
             

                <label htmlFor="">Last Name</label>
                <input type="text" {...formik.getFieldProps('last')} />
                {formik.touched.last && formik.errors.last && <span>{formik.errors.last}</span>}

                <label htmlFor="">Email</label>
                <input type="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
