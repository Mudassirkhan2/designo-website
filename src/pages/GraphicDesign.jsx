import timBrownImg from '../assets/graphicDesignPage/timBrown.png' 
import boxedWaterImg from '../assets/graphicDesignPage/boxedWater.png' 
import scienceImg from '../assets/graphicDesignPage/science.png' 
import webDesign from '../assets/webDesign.jpg'
import webDesignDesktop from '../assets/webDesignmd.png'
import appDesignDesktop from '../assets/appDesignlg.jpg'
import appDesign from '../assets/appDesign.png'
import { Link } from 'react-router-dom'
import { FaChevronCircleRight } from 'react-icons/fa'
const GraphicDesign = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="p-6 text-center md:p-24 bg-Peach h-[50vh] md:h-2/6 md:rounded-2xl flex items-center justify-center flex-col gap-5 ">
          <h1 className="text-3xl text-white lg:text-6xl"> Graphic Design</h1>
          <p className="text-gray-300 lg:w-11/12">
            We deliver eye-catching branding materials that are tailored to meet your business objectives.
          </p>
      </section>
      <section>
        <div className="grid grid-cols-1 gap-5 p-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#FDF3F0] hover:bg-light_Peach text-light_Peach hover:text-white rounded-2xl">
            <img src={timBrownImg} alt="Express Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">
                Tim Brown
              </h1>
              <p className="text-gray-600">
                A book cover designed for Tim Brown’s new release, ‘Change’
              </p>
            </div>
          </div>
          <div className="bg-[#FDF3F0] hover:bg-light_Peach  text-light_Peach hover:text-white rounded-2xl">
            <img src={boxedWaterImg} alt="Transfer Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">
                Boxed Water
              </h1>
              <p className="text-gray-600">
                A simple packaging concept made for Boxed Water
              </p>
            </div>
          </div>
          
          <div className="bg-[#FDF3F0] hover:bg-light_Peach rounded-2xl text-light_Peach hover:text-white">
            <img src={scienceImg} alt="Builder Desktop" className="w-full rounded-t-2xl"/>
            <div className="p-6 text-center">
              <h1 className="text-2xl font-bold tracking-widest uppercase ">
                Science!
              </h1>
              <p className="text-gray-600">
                A poster made in collaboration with the Federal Art Project
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
                    <Link to="/appDesign" className='relative hover:opacity-50 hover:bg-light_Peach '>
                        <img src={appDesign} alt="graphicDesign" className=' md:hidden'/>
                        <img src={appDesignDesktop} alt="graphicdesign"  className='hidden md:inline-block'/>
                        <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                            <h1 className='mb-2 text-xl font-bold tracking-widest text-center text-white uppercase'>App Design</h1>
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

export default GraphicDesign


