"use client"

import { Rating } from "@mui/material";
import Avatar from "../general/Avatar";
import { SiGravatar } from "react-icons/si";

const Comment = ({ prd }: { prd: any }) => {

    console.log(prd, "prd")
    return (
        <div className='border w-full md:w-1/3 p-2 rounded-lg my-3'>
            {/*<Avatar image={prd?.user?.image} />*/}
            <div className='flex items-center gap-1'>
                <SiGravatar size="45" />
                <div>{prd?.user?.name}</div>
                <Rating name="read-only" value={prd?.user?.rating} readOnly />
            </div>
            <div className='text-slate-500'>{prd.comment}I used the product and am very satisfied</div>
        </div>
    )
}

export default Comment




