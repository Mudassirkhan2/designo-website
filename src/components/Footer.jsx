import { Link } from "react-router-dom"
import Logo from "../assets/Oval.png"
import {AiFillFacebook ,AiOutlineInstagram ,AiOutlineTwitter  ,AiOutlineYoutube} from 'react-icons/ai'
import {FaPinterest} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className=" bg-[#1D1C1E]">
        <div className="max-w-6xl mx-auto ">
            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
                <div className="mt-8 text-center">
                    <Link to={"/"} className="flex space-x-2">
                        <img src={Logo} alt="logo" />
                        <p className="text-xl font-bold tracking-widest text-white ">DESIGNO</p> 
                    </Link>
                </div>
                <ul className="flex flex-col gap-5 mt-8 space-x-5 text-center text-gray-200 uppercase md:flex-row">
                    <Link to={"/about"} >Our Company</Link>
                    <Link to={"/locations"}>Locations</Link>
                    <Link to={"/contact"}>Contact</Link>
                </ul>
            </div>
            <hr className="w-11/12 mx-auto my-10 border-gray-500 md:w-3/4" />
            <div className="flex flex-col gap-5 pb-6 text-gray-200 md:flex-row justify-evenly">
                <div className="flex flex-col items-center justify-between">
                    <p>Designo Central Office </p>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div className="flex flex-col items-center justify-between">
                    <p>Contact Us (Central Office) </p>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>
                <div className="text-center text-Peach ">
                    <AiFillFacebook className="inline-block mx-2 text-2xl" />
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
