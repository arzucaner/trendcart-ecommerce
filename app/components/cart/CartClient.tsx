"use  Client"

import UseCart from "@/hooks/UseCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";


const CartClient = () => {
    const { cartPrdcts } = UseCart()

    console.log(cartPrdcts, "cartPrdcts")
    if (!cartPrdcts || cartPrdcts.length === 0) {
        return <div>Your basket is empty...</div>
    }
    return (
        <div className="my-3 md:my-10">
            <PageContainer>
                <div className="flex items-center gap-3 text-center border-b py-3">
                    <div className="w-1/5">Product Image</div>
                    <div className="w-1/5">Product Name</div>
                    <div className="w-1/5">Product Quantity</div>
                    <div className="w-1/5">Product Price</div>
                    <div className="w-1/5"></div>               
                </div>
                <div>
                    {
                        cartPrdcts.map(cart => (
                            <div className="flex items-center justify-between text-center my-5" key={cart.id}>
                                <div className="w-1/4 flex items-center justify-center">
                                    <Image src={cart.image} width={40} height={40} alt="" />
                                </div>
                                <div className="w-1/5">{cart.name}</div>
                                <div className="w-1/5">2</div>
                                <div className="w-1/5 text-orange-600 text-lg">{cart.price} £</div>
                                 <div className="w-1/5">
                                    <Button text="Remove Product" small onClick={() => {}}/>
                                    </div>
                            </div>
                        ))
                    }
                </div>
            </PageContainer>
        </div>
    )
}

export default CartClient
