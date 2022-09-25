import { useFormik, FormikErrors } from 'formik'
import '../styles/styles.css'

interface PropsForm {
    first: string;
    last: string;
    email: string;

}

export const FormikBasic = () => {

    const validatePropsForm = (values: PropsForm) => {
        const errors:FormikErrors<PropsForm> = {}

        if(!values.first){
            errors.first = 'El first Name es requerido'
        }else if(values.first.length <= 0){
            errors.first = 'El nombre es corto'
        }

        if(!values.last){
            errors.last = 'El first Name es requerido'
        }else if(values.last.length <= 0){
            errors.last = 'El nombre es corto'
        }

        if (!values.email) {
            errors.email = 'El Email Name es Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            first: '',
            last: '',
            email: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate: validatePropsForm
    })
    return (
        <div>
            <h1>Formik Basic</h1>
            <form onSubmit={formik.handleSubmit} noValidate>
                <label htmlFor="">First Name</label>
                <input type="text" name='first' onChange={formik.handleChange} value={formik.values.first} onBlur={formik.handleBlur} />
                {formik.touched.first && formik.errors.first && <span>{formik.errors.first}</span>}
             

                <label htmlFor="">Last Name</label>
                <input type="text" name='last' onChange={formik.handleChange} value={formik.values.last} onBlur={formik.handleBlur} />
                {formik.touched.last && formik.errors.last && <span>{formik.errors.last}</span>}

                <label htmlFor="">Email</label>
                <input type="email" name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}

                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}
