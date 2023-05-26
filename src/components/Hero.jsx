import Bitmap from '../assets/homePage/Bitmap.png'
import Frame from '../assets/homePage/Frame.png'
const Hero = () => {
  return (
    <section className="flex flex-col gap-4 p-5 md:p-16 bg-Peach md:flex-row md:rounded-xl">
   
        <div className='md:w-1/2 '>
            <h1 className="pt-20 text-4xl font-bold text-center text-white md:text-start">Award-winning custom designs and digital branding solutions</h1>
            <p className="pt-5 text-center text-gray-200 md:text-start">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <div className='text-center md:text-start'>
                <button className="px-10 py-3 mt-10 bg-white rounded-md">LEARN MORE</button>
            </div>
        </div>
        {/* frame image */}
        <div className='md:w-1/2 '>
            <div className="w-4/6 mx-auto overflow-hidden border-4 border-gray-600 rounded-lg ">
                <div className="relative flex items-center justify-center w-full bg-black h-96">
                        <img src={Bitmap} alt="Bitmap Image" className='w-full' />
                        <img src={Frame} alt="Frame" className='absolute bottom-0' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
