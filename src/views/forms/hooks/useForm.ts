import { useState } from 'react';

export const useForm = <T>(valoresIniciales: T) => {
	
	const [form, setform] = useState(valoresIniciales)
	
	const changeEvent = ({target}:React.ChangeEvent<HTMLInputElement>) => {
	
			const {name, value} = target
			
			setform({
				...form,
				[name]: value
			})
	}
	
	//Nueva Variante del reset
	
	const reset = () => {
			setform({...valoresIniciales})
	}
	
	
	
	//Validar Email
	const isValidEmail = ( email: string ) => {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }
  
  
	return {
		form,
		setform,
		changeEvent,
		reset,
		isValidEmail
	}

}
