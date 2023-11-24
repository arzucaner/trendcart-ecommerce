"use client"

import Avatar from "../general/Avatar";
import { SiGravatar } from "react-icons/si";

const Comment = ({ prd }: { prd: any }) => {

    console.log(prd, "prd")
    return (
        <div className='border w-full md:w-1/3 p-2 rounded-lg'>
            {/*<Avatar image={prd?.user?.image} />*/}
            <div className='flex items-center gap-1'>
                <SiGravatar size="25" />
                <div>{prd?.user?.name}</div>
            </div>
            <div className='text-slate-500'>{prd.comment}I used the product and am very satisfied</div>
        </div>
    )
}

export default Comment




