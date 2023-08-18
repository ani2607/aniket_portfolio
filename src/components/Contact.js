import React from 'react'

export default function Contact() {
  return (
    <div className='bg-gradient-to-r h-[80vh] from-red-600  to-indigo-800 '>
      <form action="/" className=' flex flex-col w-full sm:w-96 m-auto space-y-3 h-[80vh]  text-white  p-2 '>
        <div className=" mt-8 flex flex-col space-y-1">
        <label htmlFor=""  className='ml-1 mt-2 text-xl '>Name</label>
        <input type="text" placeholder='Name'  className=' ml-1 bg-gray-200 text-black p-2 outline-none border rounded'/>
        </div>

        <div className="flex flex-col space-y-1"> 
        <label htmlFor="" className='ml-1 text-xl'>Email</label>
        <input type="text" placeholder='Email'   className=' ml-1  bg-gray-200 text-black p-2 outline-none border rounded'/>
        </div>

        <div className="flex flex-col space-y-1">

        <label htmlFor="" className='ml-1 text-xl  '>Message</label>
        <textarea name="ani" id="text-for-me" cols="20" rows="5" placeholder='Message' className=' ml-1 bg-gray-200 text-black p-2 outline-none border rounded'></textarea>
        </div>
        <div className="">
        <button className='ml-1 hover:bg-green-400 mt-8 w-full p-2 rounded-xl bg-gradient-to-r from-cyan-500 to to-blue-500 text-xl'>Send</button>
        </div>
      </form>
    </div>
  )
}
