import React from 'react'
import Coding from '../assets/coding.jpg'
import { RiJavascriptFill } from 'react-icons/ri'
import { FaPython, FaReact } from 'react-icons/fa'
import { SiHtml5, SiTailwindcss } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { CgCPlusPlus } from 'react-icons/cg'
import { BiLogoGit } from 'react-icons/bi'



export default function About() {
  return (
    <div className='  bg-gradient-to-r from-red-600  to-indigo-800'>

      <div className=" one flex flex-col justify-evenly items-center  flex-wrap md:flex-row">

        <div className="left  md:w-[50vw]">

          <div className="heading mb-10 mt-10 text-center md:text-left md:ml-16  ">
            <h1 className='text-4xl text-cyan-300 underline  '> <span className=''>About</span> <span className='text-white'> Me </span></h1>
          </div>

          <div className="bakwass  mt-8 m-10 text-2xl text-center text-white">
            <p className=''>Hi! Everyone, I'm <span className='text-cyan-300'> Aniket Sharma</span> based in <span className='text-cyan-300'> Punjab,India.</span></p>
            <br />
            <p>I am a  <span className='text-cyan-300'>passionate </span> developer and believes in the philosophy of </p>
            <span className='text-cyan-300'>"change is contant"</span>.
            <br /> <br />

            <p className=''> Other than developing &#128187; , I spend  most of my time playing badminton &#127992; ,  guitar &#127928; and shuffling songs on spotify🎧. </p>

          </div>
        </div>





        <div className=" md:h-[80vh]    md:w-[40vw] m-6 md:m-1">
          <img src={Coding} alt="aniket" className='h-80 md:mt-32 md:h-96 border rounded-3xl border-blue-800 m-auto' />
        </div>



      </div>


      <div className="two  ">

        <div className="heading  mt-10 text-center lg:text-left lg:ml-28 ">
          <h1 className='text-6xl text-cyan-300 underline  '> <span className=''>Skills</span> </h1>
        </div>
        {/* for phone size */}
        <div className=" mt-10 lg:hidden second text-white flex flex-col space-y-3 justify-center items-center ">

          <div className="">
            <FaReact size={180} />
          </div>
          <div className="">
            <SiTailwindcss size={180} />
          </div>
          <div className="">
            <CgCPlusPlus size={180} />
          </div>
          <div className="">
            <SiHtml5 size={180} />
          </div>

          <div className="javascript text-center">
            <RiJavascriptFill size={180} />
          </div>

          <div className="">
            <DiCss3 size={180} />
          </div>


          <div className="">
            <FaPython size={180} />
          </div>



          <div className="">
            <BiLogoGit size={180} />
          </div>
        </div>


        <div className=" hidden mt-10 p-2 text-white lg:flex flex-col space-y-2 justify-center items-center  flex-wrap">

          <div className="firstrow flex space-x-10 flex-wrap ">

            <div className="">
              <FaReact size={180} />
            </div>
            <div className="">
              <SiTailwindcss size={180} />
            </div>
            
            <div className="">
              <CgCPlusPlus size={180} />
            </div>
            <div className="">
              <SiHtml5 size={180} />
            </div>
            

          </div>


          <div className="secondrow flex space-x-8 flex-wrap">
            
            <div className="">
              <DiCss3 size={180} />
            </div>
            <div className="">
              <RiJavascriptFill size={180} />
            </div>
            <div className="">
              <FaPython size={180} />
            </div>
            <div className="">
              <BiLogoGit size={180} />
            </div>

          </div>


        </div>
      </div>




    </div>
  )
}
