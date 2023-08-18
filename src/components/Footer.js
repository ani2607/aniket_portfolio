import React from 'react'
import { AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoLinkedin } from 'react-icons/bi';

export default function Footer() {
  return (
    <footer className='flex flex-col  justify-center items-center md:flex-row md:justify-around md:space-x-96 p-3  text-white bg-gradient-to-r from-red-700  to-indigo-800  h-[5rem] '>

      <div className='ml-2'>
        Copyright &copy; Aniket Sharma
      </div>
      <div className="icons flex space-x-3 ">
        <a href="https://github.com/ani2607" target="_blank" rel = "noreferrer">
          <AiOutlineGithub size={25} /> 
        </a>
        <a href="https://twitter.com/_aniket22_" target="_blank" rel = "noreferrer">

          <AiOutlineTwitter size={25} />
        </a>
        <a href="https://www.linkedin.com/in/aniket-sharma-4638a5243/" target="_blank" rel = "noreferrer" >

          <BiLogoLinkedin size={25} />
        </a>
        <a href="https://www.instagram.com/_aniket22_/" target="_blank" rel = "noreferrer" >

          <AiOutlineInstagram size={25} />
        </a>
      </div>

    </footer>
  )
}
