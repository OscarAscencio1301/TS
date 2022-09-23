import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import logo from '../logo.svg'
import { AboutView } from '../views/AboutView'
import { ShopingPage } from '../views/components-patterns/pages/ShopingPage'
import { HomeView } from '../views/HomeView'
import { UserView } from '../views/UserView'



export const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li> <NavLink to={'/home'}>Home</NavLink> </li>
            <li> <NavLink to={'/shopping'}>Shopping</NavLink> </li>
            <li> <NavLink to={'/users'}>Users</NavLink> </li>
          </ul>
        </nav>


        <Routes>
          <Route path='/home' element={<HomeView />} />
          <Route path='/shopping' element={<ShopingPage />} />
          <Route path='/users' element={<UserView />} />
          <Route path='/*' element={<HomeView />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
