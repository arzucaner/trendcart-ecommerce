"use client"

import PageContainer from "../containers/PageContainer";
import Image from "next/image";

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
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}

export default DetailClient
