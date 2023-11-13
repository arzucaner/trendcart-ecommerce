import Image from "next/image";

const Banner = () => {
    return (
        <div className="h-[237px]">
            <div className="h-[137px] relative">
                <Image src={"/trendcart.png"} fill alt=""/>
            </div>
        </div>
    )
}

export default Banner;