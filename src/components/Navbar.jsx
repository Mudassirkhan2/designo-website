import Logo from "../assets/Oval.png"
import { useState } from "react";
import { GiCrossedBones, GiHamburgerMenu } from "react-icons/gi";
import { NavLink ,useLocation} from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(true)
  const location = useLocation();
  function pathMathRoute(route){
    if(route ===location.pathname){
        return true
    }
   } 
     const handleToggle = ()=>{
    setShowMediaIcons(!showMediaIcons)
    
  }
  const handleLinkClick = () => {
    setShowMediaIcons(true)
  };
  return (
    <header className="max-w-6xl mx-auto">
        <nav  className="flex justify-between ">
            <div className="lg:p-4">
                <NavLink to={"/"} className="flex space-x-2 ">
                  <img src={Logo} alt="logo" />
                  <p className="text-xl font-bold tracking-widest">DESIGNO</p> 
                </NavLink>
            </div>
              {
            showMediaIcons ? <GiHamburgerMenu className='block text-2xl lg:hidden ' onClick={handleToggle}/> : ""  
                      }

        <div className={`space-x-7 bg-white  bg-opacity-5 text-xl  flex flex-col lg:items-center justify-center gap-5 absolute  lg:relative  lg:flex lg:p-4 lg:rounded-md top-0 right-0 w-9/12 h-screen backdrop-blur-lg z-40 lg:flex-row lg:h-fit lg:w-1/2   ${showMediaIcons ? "hidden" :"block"}`}>
              <GiCrossedBones className='absolute block right-4 top-10 Cross lg:hidden' onClick={()=>handleToggle()}/>

              <NavLink   to="/about"  className={`tracking-wider border-b-4 border-b-transparent ${pathMathRoute("/about") && "text-gray-700 font-bold border-b-gray-600"}`}  onClick={handleLinkClick}>OUR COMPANY</NavLink>

              <NavLink to="/locations" className={`tracking-wider border-b-4 border-b-transparent ${pathMathRoute("/locations") && "text-gray-700 font-bold border-b-gray-600"}`}  onClick={handleLinkClick}>LOCATIONS</NavLink>

              <NavLink to="/contact" className={`tracking-wider border-b-4 border-b-transparent ${pathMathRoute("/contact") && "text-gray-700 font-bold border-b-gray-600"}`} onClick={handleLinkClick}>CONTACT</NavLink>
        </div>
        </nav>
    </header>
  )
}

export default Navbar



//   return (
//     <>
//       <header className='flex justify-between items-center w-[100%] lg:mt-6 p-8  absolute top-0 left-0 font-BarlowCondensed '>
//         <div>
//            <NavLink >
//              <img src={logo} alt="space-tourism" className='w-12 h-12 max-w-none' />
//            </NavLink>
//         </div>


//       </header>
//     </>
//   )
// }