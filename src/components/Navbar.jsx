import { Link } from "react-router-dom"
import Logo from "../assets/Oval.svg"
const Navbar = () => {
  return (
    <header className="max-w-6xl mx-auto">
        <nav  className="flex justify-between ">
            <div >
                <Link to={"/"} className="flex space-x-2 ">
                  <img src={Logo} alt="logo" />
                  <p className="font-bold text-xl tracking-widest">DESIGNO</p> 
                </Link>
            </div>
            <ul className="space-x-5 uppercase">
                <Link to={"/about"} >Our Company</Link>
                <Link to={"/locations"}>Locations</Link>
                <Link to={"/contact"}>Contact</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
