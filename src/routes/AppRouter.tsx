import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import logo from '../logo.svg'
import { FormikAbtract, FormikBasic, FormikComponents, FormikYup, RegistrForm } from '../views/forms/Pages'
import { HomeView } from '../views/HomeView'




export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li> <NavLink to={'/home'}>Home</NavLink> </li>
            <li> <NavLink to={'/register'}>Register</NavLink> </li>
            <li> <NavLink to={'/basic'}>Formik Basic</NavLink> </li>
            <li> <NavLink to={'/yup'}>Formik Yup</NavLink> </li>
            <li> <NavLink to={'/components'}>Formik Components</NavLink> </li>
            <li> <NavLink to={'/abstract'}>Formik Abstrabct</NavLink> </li>
          </ul>
        </nav>


        <Routes>
          <Route path='/home' element={<HomeView />} />
          <Route path='/register' element={<RegistrForm />} />
          <Route path='/basic' element={<FormikBasic />} />
          <Route path='/yup' element={<FormikYup />} />
          <Route path='/components' element={<FormikComponents />} />
          <Route path='/abstract' element={<FormikAbtract />} />
          <Route path='/*' element={<HomeView />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
