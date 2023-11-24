import { SiGravatar } from "react-icons/si";

interface AvatarProps {
    image?: string
}
const Avatar: React.FC<AvatarProps> = ({ image }) => {
    if (image) return <img src={image} alt="" />
    return <div><SiGravatar size="25" /></div>
}


export default Avatar
