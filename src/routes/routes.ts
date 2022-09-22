import { lazy } from 'react'
import { UserView } from './../views/UserView';
import { AboutView } from './../views/AboutView';
import { HomeView } from './../views/HomeView';


export type RoutesTypes = {
    to: string,
    path: string,
    Component: React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element),
    name: string
}

const home1 = lazy(() => import(/*webpackChunkName: "Home"*/ '../views/HomeView'))
const users1 = lazy(() => import(/*webpackChunkName: "User"*/ '../views/UserView'))
const about1 = lazy(() => import(/*webpackChunkName: "About"*/ '../views/AboutView'))

export const routes:RoutesTypes[] = [
    {
        to: '/home',
        path: '/home',
        Component: home1,
        name: 'Home'
    },
    {
        to: '/about',
        path: '/about',
        Component: users1,
        name: 'about'
    },
    {
        to: '/users',
        path: '/users',
        Component: about1,
        name: 'users'
    }
]