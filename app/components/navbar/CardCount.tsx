"use client"
import { IoMdBasket } from "react-icons/io";
import UseCart from '@/hooks/UseCart'
const CardCount = () => {
    const { cartPrdcts } = UseCart()
    return (
        <div className="hidden md:flex relative">
            <IoMdBasket size="30" />
            <div className='absolyte -top-1 right-2 text-xs bg-orange-900 w-5 h-5 flex items-center justify-center rounded-full'>{cartPrdcts?.length}</div>
        </div>
    )
}

export default CardCount;