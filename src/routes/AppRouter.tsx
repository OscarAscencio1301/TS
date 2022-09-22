import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

import { routes } from './routes'



export const AppRouter = () => {
  return (
    <Suspense fallback={<h1>Hola Mundo</h1>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            {/* <img src={logo} alt="logo" /> */}
            <ul>
              {
                routes.map(route => <li> <NavLink to={route.to}>{route.name}</NavLink> </li>)

              }
            </ul>
          </nav>


          <Routes>

            {
              routes.map(route => <Route path={route.path} element={<route.Component />} />)
            }
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}
