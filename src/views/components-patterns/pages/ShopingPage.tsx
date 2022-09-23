import React from 'react'
import { PrdocuctCard, ProductButtons, ProductImage, ProductTitle } from '../components/PrdocuctCard'

const prooduct = {
  id: '1',
  nombre: 'Cafe',
  img: '/coffee-mug.png'
}

export const ShopingPage = () => {
  return (
    <div>
      <h1>ShopingPage</h1>
      <hr />
      <PrdocuctCard producto={prooduct}>
        <PrdocuctCard.Image />
        <PrdocuctCard.Title />
        <PrdocuctCard.Title />
        <PrdocuctCard.Buttons />
      </PrdocuctCard>
      
      <PrdocuctCard producto={prooduct}>
        <PrdocuctCard.Image />
        <PrdocuctCard.Title />
        <PrdocuctCard.Title />
        <PrdocuctCard.Buttons />
      </PrdocuctCard>
    </div>
  )
}
