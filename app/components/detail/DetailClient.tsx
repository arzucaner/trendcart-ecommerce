"use client"

import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Counter from "../general/Counter";

const DetailClient = ({ product }: { product: any }) => {

    return (
        <div className="my-10">
            <PageContainer>
                <div className="block md:flex gap-10 justify-center">
                    <div className="relative h-[400px] w-[400px]">
                        <Image src={product?.image} fill alt="" />
                    </div>
                    <div className="w-1/2 space-y-3">
                        <div className="text-xl md:text-2xl">{product?.name}</div>
                        <div className="text-slate-500">{product?.description}</div>
                        <div className="flex items-cente gap-2">
                            <div>STOCK STATUS:</div>
                            {
                                product.inStock ? <div className="text-green-500">Product is in stock</div> : <div className="text-red-500">Product is out of stock</div>
                            }
                        </div>
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}

export default DetailClient
