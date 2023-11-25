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
    const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null)

    const addToBasket = useCallback((product: CardProductProps) => {
        setCartPrdcts(prev => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            return updatedCart = [product]
        })

    }, [cartPrdcts])

    let value = {
        productCartQty,
        addToBasket,
        cartPrdcts
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
