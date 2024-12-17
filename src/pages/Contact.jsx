
import {assets} from '../assets/assets.js'

const Contact = () => {
  return (
    <div>
      
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-lg font-semibold text-gray-600'>Our OFFICE</p>
          <p className='text-gray-600'>K/327 KripaKunj  <br />Near Engineering College Chauraha, Lucknow, 221026</p>
          <p className='text-gray-600'>Mobile:+91-9087654321 <br />Email: abcd1234@gmail.com</p>
          <p className='text-lg font-semibold text-gray-600'>Careers at BookMyDoctor </p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>

      </div>
    </div>
  )
}

export default Contact
