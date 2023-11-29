"use client"
import { CardProductProps } from "@/app/components/detail/DetailClient";
import { createContext, useState, useContext, useCallback, useEffect } from "react";
import toast from "react-hot-toast";



interface CartContextProps {
    productCartQty: number
    cartPrdcts: CardProductProps[] | null
    addToBasket: (product: CardProductProps) => void
    removeFromCart: (product: CardProductProps) => void
}
const CartContext = createContext<CartContextProps | null>(null)


interface Props {
    [propName: string]: any

}
export const CartContextProvider = (props: Props) => {
    const [productCartQty, setProductCartQty] = useState(0)
    const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null)

    useEffect(() => {
        let getItem: any = localStorage.getItem('cart')
        let getItemParse: CardProductProps[] | null = JSON.parse(getItem)
        setCartPrdcts(getItemParse)
    }, [])

    const removeCart = useCallback(() => {

    }, [])

    const addToBasket = useCallback((product: CardProductProps) => {
        setCartPrdcts(prev => {
            let updatedCart;
            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            toast.success('Product added to the basket!')
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            return updatedCart
        })

    }, [cartPrdcts])

    const removeFromCart = useCallback((product: CardProductProps) => {
        if (cartPrdcts) {
            const filteredProducts = cartPrdcts.filter(cart => cart.id !== product.id)

            setCartPrdcts(filteredProducts)
            toast.success('Product removed to the basket!')
            localStorage.setItem('cart', JSON.stringify(filteredProducts))
        }

    }, [cartPrdcts])

    let value = {
        productCartQty,
        addToBasket,
        cartPrdcts,
        removeFromCart
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
