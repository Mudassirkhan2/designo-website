import webDesign from '../assets/webDesign.jpg'
import webDesignDesktop from '../assets/webDesignlg.png'
import appDesignDesktop from '../assets/appDesignlg.jpg'
import appDesign from '../assets/appDesign.png'
import graphicDesign from '../assets/GraphicDesign.jpg'
import graphicDesignDesktop from '../assets/graphicDesignlg.jpg'
import { FaChevronCircleRight } from 'react-icons/fa'
import resourcefullImg from '../assets/homePage/resourcefullImg.png'
import passionateImg from '../assets/homePage/passionateImg.png'
import friendlyImg from '../assets/homePage/friendlyImg.png'
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <>
        <section className='grid grid-flow-row grid-rows-1 gap-4 my-6 md:grid-flow-col place-items-center'>
                <Link  to ={"/webDesign"} className='relative hover:opacity-50 hover:bg-light_Peach '>
                    <img src={webDesign} alt="webdesign"  className=' md:hidden'/>
                    <img src={webDesignDesktop} alt="webdesign" className='hidden md:inline-block' />
                    <div className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                        <h1 className='mb-2 text-xl font-bold tracking-widest text-center text-white uppercase'>Web Design</h1>
                        <div className='flex flex-row items-center justify-center space-x-2'>
                            <p className='text-sm tracking-widest text-center text-white'>VIEW PROJECTS</p>
                            <FaChevronCircleRight className='text-white ' />
                        </div>
                        
                    </div>
                </Link>
                <div className='flex flex-col gap-4'>
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
        
        <section className='flex flex-col gap-4 my-24 md:flex-row'>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <img src={passionateImg} alt="passionateImg" />
                <h2>
                    <span className='text-2xl font-bold tracking-widest uppercase'>passionate</span>
                </h2>
                <p  className='w-11/12 '>
                    Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <img src={resourcefullImg} alt="resourcefullImg" />
                <h2>
                    <span className='text-2xl font-bold tracking-widest uppercase'>resourcefull</span>
                </h2>
                <p className='w-11/12 '>
                    Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <img src={friendlyImg} alt="friendlyImg" />
                <h2>
                    <span className='text-2xl font-bold tracking-widest uppercase'>friendly</span>
                </h2>
                <p  className='w-11/12 '>
                    We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.
                </p>
            </div>
        </section>
    
    </>
  )
}   

export default Projects
