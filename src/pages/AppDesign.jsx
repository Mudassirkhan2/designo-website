import airFilterImg from '../assets/appDesignPage/airFilter.png' 
import eyeCamImg from '../assets/appDesignPage/eyeCam.png' 
import faceItImg from '../assets/appDesignPage/faceIt.png' 
import loopStudiosImg from '../assets/appDesignPage/loopStudios.png' 
import todoImg from '../assets/appDesignPage/todo.png' 
import webDesign from '../assets/webDesign.jpg'
import webDesignDesktop from '../assets/webDesignmd.png'
import graphicDesign from '../assets/GraphicDesign.jpg'
import graphicDesignDesktop from '../assets/graphicDesignlg.jpg'
import { Link } from 'react-router-dom'
import { FaChevronCircleRight } from 'react-icons/fa'
const AppDesign = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="p-6 text-center md:p-24 bg-Peach h-[50vh] md:h-2/6 md:rounded-2xl flex items-center justify-center flex-col gap-5 ">
          <h1 className="text-3xl text-white lg:text-6xl">App Design</h1>
          <p className="text-gray-300 lg:w-11/12">
            Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.
          </p>
      </section>
      <section>
        <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#FDF3F0] hover:bg-light_Peach text-light_Peach hover:text-white rounded-2xl">
            <img src={airFilterImg} alt="Express Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">
                air filter
              </h1>
              <p className="text-gray-600">
                Solving the problem of poor indoor air quality by filtering the air
              </p>
            </div>
          </div>
          <div className="bg-[#FDF3F0] hover:bg-light_Peach  text-light_Peach hover:text-white rounded-2xl">
            <img src={eyeCamImg} alt="Transfer Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">
                Eyecam
              </h1>
              <p className="text-gray-600">
                Product that lets you edit your favorite photos and videos at any time
              </p>
            </div>
          </div>
          
          <div className="bg-[#FDF3F0] hover:bg-light_Peach rounded-2xl text-light_Peach hover:text-white">
            <img src={faceItImg} alt="Builder Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">
                Faceit
              </h1>
              <p className="text-gray-600">
                Get to meet your favorite internet superstar with the faceit app
              </p>
            </div>
          </div>
          <div className="bg-[#FDF3F0]  hover:bg-light_Peach rounded-2xl text-light_Peach hover:text-white">
            <img src={todoImg} alt="Blogr Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">
                Todo
              </h1>
              <p className="text-gray-600">
                A todo app that features cloud sync with light and dark mode
              </p>
            </div>
          </div>
          <div className="bg-[#FDF3F0] hover:bg-light_Peach rounded-2xl text-light_Peach hover:text-white">
            <img src={loopStudiosImg} alt="Camp Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center" >
              <h1 className="text-2xl font-bold tracking-widest uppercase ">
                Loopstudios
              </h1>
              <p className="text-gray-600">
                A VR experience app made for Loopstudios
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='my-24'>
          <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
                    <Link  to ="/webDesign" className='relative hover:opacity-50 hover:bg-light_Peach '>
                        <img src={webDesign} alt="webDesign" className=' md:hidden' />
                        <img src={webDesignDesktop} alt="webDesign" className='hidden md:inline-block' />
                        <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                            <h1 className='mb-2 text-xl font-bold tracking-widest text-center text-white uppercase'>web Design </h1>
                            <div className='flex flex-row items-center justify-center space-x-2'>
                                <p className='text-sm tracking-widest text-center text-white'>VIEW PROJECTS</p>
                                <FaChevronCircleRight className='text-white ' />
                            </div>
                            
                        </div>
                    </Link>
                    <Link to="/graphicDesign" className='relative hover:opacity-50 hover:bg-light_Peach '>
                        <img src={graphicDesign} alt="graphicDesign" className=' md:hidden'/>
                        <img src={graphicDesignDesktop} alt="graphicdesign"  className='hidden md:inline-block'/>
                        <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                            <h1 className='mb-2 text-xl font-bold tracking-widest text-center text-white uppercase'>graphic Design</h1>
                            <div className='flex flex-row items-center justify-center space-x-2'>
                                <p className='text-sm tracking-widest text-center text-white'>VIEW PROJECTS</p>
                                <FaChevronCircleRight className='text-white ' />
                            </div>
                            
                        </div>
                    </Link>
                </div>
      </section>
    </div>
  )
}

export default AppDesign
