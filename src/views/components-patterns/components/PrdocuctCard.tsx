import React, { createContext, useContext, useState } from 'react'
import styles from '../styles/styles.module.css'
import imageNone from '../assets/no-image.jpg'
import { useCounter } from '../hooks/useCounter'

interface Props {
    producto: Producto,
    children: JSX.Element | JSX.Element[]
}

interface Producto {
    id: string,
    nombre: string,
    img?: string
}


interface PropsContext {
    add: (number: number) => void,
    counter: number,
    producto: Producto,
}

const ProductContext = createContext<PropsContext>({} as PropsContext)
const { Provider } = ProductContext

export const ProductImage = ({ img = '' }) => {
    const { producto } = useContext(ProductContext)

    return (
        <img src={producto.img ? producto.img : img ? img : imageNone} alt="" className={styles.productImg} />
    )

}

export const ProductTitle = () => {

    const { producto } = useContext(ProductContext)
    return (
        <span className={styles.productDescription}>{producto.nombre}</span>
    )

}

export const ProductButtons = () => {
    const { add, counter } = useContext(ProductContext)

    return (

        <div className={styles.buttonsContainer}>
            <button onClick={() => add(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={styles.buttonAdd} onClick={() => add(1)}>+</button>
        </div>
    )


}




// export const PrdocuctCard = ({ producto }: Props) => {
//     const { add, counter } = useCounter()
//     return (

//         <div className={styles.productCard}>
//             <img src={producto.img ? producto.img : imageNone} alt="" className={styles.productImg} />
//             <span className={styles.productDescription}>{producto.nombre}</span>
//             <div className={styles.buttonsContainer}>
//                 <button className={styles.buttonMinus} onClick={() => add(-1)}>-</button>
//                 <div className={styles.countLabel}>{counter}</div>
//                 <button className={styles.buttonAdd} onClick={() => add(1)}>+</button>

//             </div>

//         </div>
//     )
// }

export const PrdocuctCard = ({ children, producto }: Props) => {
    const { add, counter } = useCounter()
    return (
        <Provider value={{
            add,
            counter,
            producto
        }}>
            <div className={styles.productCard}>
                {/* <ProductImage />
            <ProductTitle title={producto.nombre}/>
            <ProductButtons add={add} counter={counter}/> */}
                {children}

            </div>
        </Provider>

    )
}

PrdocuctCard.Image = ProductImage;
PrdocuctCard.Title = ProductTitle;
PrdocuctCard.Buttons = ProductButtons;