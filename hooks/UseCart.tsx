"use client"
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useState, useContext, useCallback } from "react";

interface CartContextProps {
    productCartQty: number
    addToBasket: (product: CardProductProps) => void


}
const CartContext = createContext<CartContextProps | null>(null)


interface Props {
    [propName: string]: any

}
export const CartContextProvider = (props: Props) => {
    const [productCartQty, setProductCartQty] = useState(0)

    const addToBasket = useCallback(() => {

    }, [])

    let value = {
        productCartQty,
        addToBasket

    }
    return (
        <CartContext.Provider value={value} {...props} />

    )

}

const UseCart = () => {

    const context = useContext(CartContext)
    if (context == null) {
        throw new Error('There is an error situation')
    }
    return context
}

export default UseCart
