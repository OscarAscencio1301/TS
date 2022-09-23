import React, { useState } from 'react'

export const useCounter = () => {
    const [counter, setcounter] = useState(0)

    const add = (number:number) => {
        setcounter(numero => Math.max(numero + number, 0))
    }
  return {
    counter,
    add
  }
}
