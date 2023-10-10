import React from 'react'
import { FaCamera, FaCode, FaDatabase, FaFontAwesome, FaHtml5, FaPen, FaUser, FaUserEdit } from 'react-icons/fa'

export default function Services() {
  return (
    <>
    <div className=' '>
        <div className='text-white  text-center mb-10 pt-[50px] '>
          <p> WHAT I WILL DO FOR YOU</p>  <br></br>
          <h1 className='text-sky-300'><b> OUR SERVICES</b></h1>
        </div>
        <div className="md:ml-[200px]   md:flex-col-1">
        <div className=' text-white md:flex  gap-[30px] ml-[0px] text-[15px]'>
            <div className='bg-gray-950  p-3 rounded-2xl'>
           <div className='flex  pb-3 justify-center items-center gap-[20px] font-semibold '>
           <FaPen className=' text-sky-300 border border-sky-600 shadow-2xl  rounded-[50%] text-[50px] p-[15px]'/>
                <h1>UI && UX DESIGN</h1>
                </div>
                <p className='w-[400px]'> UI design focuses on creating visually appealing interfaces, while UX design ensures a user-friendly and intuitive experience through research and testing.</p>
            </div>
            <div className='bg-gray-950 rounded-2xl mt-2  p-3 text-[15px]'>
              <div className='flex  pb-3 justify-center items-center gap-[20px] font-semibold '>
              <FaCode className=' text-sky-300 border border-sky-600 shadow-2xl  rounded-[50%] text-[50px] p-[15px]'/>
                <h1><b>WEBSITE DEVELOPER</b></h1>
                </div>
                <p className='w-[400px]'>Website development involves coding and building functional websites with interactive features and responsive design for online presence and user engagement.</p>
            </div>
            </div>
            <div className="md:flex mt-[50px] gap-[30px]">
            <div className='text-white p-3 rounded-2xl text-[15px] bg-gray-950'>
               <div className='flex  pb-3 justify-center items-center gap-[20px] font-semibold'>
                <FaCamera className=' text-sky-300 border border-sky-600 shadow-2xl  rounded-[50%] text-[50px] p-[15px]'/>
                <h1><b>PHOTOSHOP</b></h1>
                </div>
                <p className='w-[400px] ' >Photoshop services include image manipulation, retouching, and graphic design for creating visually appealing and professional digital assets.</p>
           
            </div>
            <div className="w-[400px] bg-gray-950 text-[15px] mt-2 rounded-2xl p-3 text-white">
                <div className='flex  pb-3 justify-center items-center gap-[20px] font-semibold'>
                <FaHtml5 className=' text-sky-300 border border-sky-600 shadow-2xl  rounded-[50%] text-[50px] p-[15px]'/>
              <h1>FRONTEND DEVELOPMENT</h1>
              </div>
              <p>Frontend development focuses on coding and designing the user interface of websites or web applications, ensuring a visually appealing and interactive user experience.</p>
            </div>
            </div>
            </div>
      
    </div>
  
    </>
  )
}
