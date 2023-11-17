"use client"

import PageContainer from "../containers/PageContainer";
import Image from "next/image";

const DetailClient = ({ product }: { product: any }) => {

    return (
        <div className="my-10">
            <PageContainer>
                <div className="flex">
                    <div className="relative h-[400px] w-[200px] flex-1">
                        <Image src={product?.image} fill alt="" />
                    </div>
                    <div className="w-3/4">right</div>
                </div>
            </PageContainer>
        </div>
    )
}

export default DetailClient
