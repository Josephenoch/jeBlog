import {AiOutlineLink}from "react-icons/ai"
import {FaGithub,FaLinkedinIn}from "react-icons/fa"
import {FiTwitter }from "react-icons/fi"
import { ISocialLink } from "../interfaces/socialLinks"

const socialLinks:ISocialLink[] = [
    {
        link:"https://twitter.com/techbrojoe",
        icon: FiTwitter,
        name:"Twitter"
    },
    {
        link:"https://github.com/josephenoch",
        icon: FaGithub,
        name:"GitHub"
    },
    {
        link:"https://linkedin.com/in/joseph-enoch",
        icon: FaLinkedinIn,
        name:"LinkedIn"
    },
    {
        link:"https://josephenoch.vercel.app",
        icon: AiOutlineLink,
        name:"Portfolio"
    }
]
export default socialLinks