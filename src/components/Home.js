import React from 'react'
import Typewriter from 'typewriter-effect'
import Photo from '../assets/photo.jpg'

export default function Home() {
    return (
        <div className='flex flex-col md:flex-row md:justify-center md:items-center flex-wrap bg-gradient-to-r from-red-600  to-indigo-800 text-white  '>

                {/* right */}
            <div className="  flex flex-col flex-wrap justify-center space-y-2 items-center text-2xl lg:text-4xl h-[70vh] md:h-[80vh] md:w-[50vw]  m-1">
                <h1>Hi Techies!</h1>
                <div className="place flex flex-col justify-center items-center flex-wrap">

                <h1>I'm </h1>
                <span className='lg:text-7xl text-5xl text-cyan-400 text-center'>Aniket Sharma</span>
                </div>
                <h1>a,</h1>
                <div className=' text-center'>
                    <Typewriter options={{
                        autoStart: true,
                        loop: true,
                        delay: 60,
                        strings: [" Frontend Developer.", "Competitive Programmer."],
                    }} />
                </div>
            </div>



            <div className=" h-[70vh] md:h-[80vh] md:w-[40vw] ">
                <img src={Photo} alt="aniket" className='h-80 md:mt-24 md:h-96 border rounded-3xl border-blue-800 m-auto' />
            </div>
        </div>
    )
}
