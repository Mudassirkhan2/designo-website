import BlogrDesktopImg from '../assets/webDesignPage/Blogr - Desktop.png' 
import BuilderDesktopImg from '../assets/webDesignPage/Builder - Desktop.png' 
import CampDesktopImg from '../assets/webDesignPage/Camp - Desktop.png' 
import ExpressDesktopImg from '../assets/webDesignPage/Express - Desktop.png' 
import TransferDesktopImg from '../assets/webDesignPage/Transfer - Desktop.png' 
import PhotonDesktopImg from '../assets/webDesignPage/Photon - Desktop.png' 
import appDesignDesktop from '../assets/appDesignlg.jpg'
import appDesign from '../assets/appDesign.png'
import graphicDesign from '../assets/GraphicDesign.jpg'
import graphicDesignDesktop from '../assets/graphicDesignlg.jpg'
import { Link } from 'react-router-dom'
import { FaChevronCircleRight } from 'react-icons/fa'
const WebDesign = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="p-6 text-center md:p-24 bg-Peach h-[50vh] md:h-2/6 md:rounded-2xl flex items-center justify-center flex-col gap-5 ">
          <h1 className="text-3xl text-white lg:text-6xl">Web Design</h1>
          <p className="text-gray-300 lg:w-11/12">
            We build websites that serve as powerful marketing tools and bring memorable brand experiences.
          </p>
      </section>
      <section>
        <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#FDF3F0] hover:bg-light_Peach text-light_Peach hover:text-white rounded-2xl">
            <img src={ExpressDesktopImg} alt="Express Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">Express</h1>
              <p className="text-gray-600">
                A multi-carrier shipping website for ecommerce businesses
              </p>
            </div>
          </div>
          <div className="bg-[#FDF3F0] hover:bg-light_Peach  text-light_Peach hover:text-white rounded-2xl">
            <img src={TransferDesktopImg} alt="Transfer Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">Transfer</h1>
              <p className="text-gray-600">
                Site for low-cost money transfers and sending money within seconds
              </p>
            </div>
          </div>
          <div className="bg-[#FDF3F0] hover:bg-light_Peach text-light_Peach hover:text-white rounded-2xl">
            <img src={PhotonDesktopImg} alt="Photon Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">Photon</h1>
              <p className="text-gray-600">
                A state-of-the-art music player with high-resolution audio and DSP effects
              </p>
            </div>
          </div>
          <div className="bg-[#FDF3F0] hover:bg-light_Peach rounded-2xl text-light_Peach hover:text-white">
            <img src={BuilderDesktopImg} alt="Builder Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">Builder</h1>
              <p className="text-gray-600">
                Connects users with local contractors based on their location
              </p>
            </div>
          </div>
          <div className="bg-[#FDF3F0]  hover:bg-light_Peach rounded-2xl text-light_Peach hover:text-white">
            <img src={BlogrDesktopImg} alt="Blogr Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">Blogr</h1>
              <p className="text-gray-600">
                Blogr is a platform for creating an online blog or publication
              </p>
            </div>
          </div>
          <div className="bg-[#FDF3F0] hover:bg-light_Peach rounded-2xl text-light_Peach hover:text-white">
            <img src={CampDesktopImg} alt="Camp Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center" >
              <h1 className="text-2xl font-bold tracking-widest uppercase ">Camp</h1>
              <p className="text-gray-600">
                Get expert training in coding, data, design, and digital marketing
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='my-24'>
          <div className='flex flex-col items-center justify-center gap-4 md:flex-row'>
                    <Link  to ="/appDesign" className='relative hover:opacity-50 hover:bg-light_Peach '>
                        <img src={appDesign} alt="appDesign" className=' md:hidden' />
                        <img src={appDesignDesktop} alt="appDesign" className='hidden md:inline-block' />
                        <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                            <h1 className='mb-2 text-xl font-bold tracking-widest text-center text-white uppercase'>app Design</h1>
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

export default WebDesign
