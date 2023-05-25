import { Link } from "react-router-dom"
import Logo from "../assets/Oval.svg"
import {AiFillFacebook ,AiOutlineInstagram ,AiOutlineTwitter  ,AiOutlineYoutube} from 'react-icons/ai'
import {FaPinterest} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className=" bg-[#1D1C1E]">
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between  items-center flex-col md:flex-row gap-5 ">
                <div className="text-center">
                    <Link to={"/"} className="flex space-x-2 ">
                        <img src={Logo} alt="logo" />
                        <p className="font-bold text-xl tracking-widest text-white">DESIGNO</p> 
                    </Link>
                </div>
                <ul className="flex flex-col text-center md:flex-row space-x-5 uppercase gap-5 text-gray-200">
                    <Link to={"/about"} >Our Company</Link>
                    <Link to={"/locations"}>Locations</Link>
                    <Link to={"/contact"}>Contact</Link>
                </ul>
            </div>
            <hr className="my-10" />
            <div className="flex flex-col md:flex-row justify-evenly gap-5 text-gray-200 pb-6">
                <div className="flex justify-between items-center flex-col">
                    <p>Designo Central Office </p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="flex justify-between items-center flex-col">
                    <p>Contact Us (Central Office) </p>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>
                <div className="text-center text-Peach ">
                    <AiFillFacebook className="inline-block mx-2  text-2xl" />
                    <AiOutlineInstagram className="inline-block mx-2 text-2xl" />
                    <AiOutlineTwitter className="inline-block mx-2 text-2xl" />
                    <FaPinterest className="inline-block mx-2 text-2xl" />
                    <AiOutlineYoutube className="inline-block mx-2 text-2xl" />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
