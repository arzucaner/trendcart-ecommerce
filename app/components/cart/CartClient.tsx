"use  Client"

import UseCart from "@/hooks/UseCart"
import PageContainer from "../containers/PageContainer"

const CartClient = () => {
    const {cartPrdcts} = UseCart()

    console.log(cartPrdcts, "cartPrdcts")
    if(!cartPrdcts || cartPrdcts.length === 0){
        return <div>Your basket is empty...</div>
    }
  return (
    <div>
      <PageContainer>
        <div>

        </div>
       </PageContainer>
    </div>
  )
}

export default CartClient
