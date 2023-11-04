import React from 'react'

const Footer = () => {
  return (
    <div className='w-full text-white border-t'>
      <div className='flex justify-around'>
        <div className='p-4'>
            <h2 className='text-xl font-bold py-2'>support</h2>
            <ul>
                <li>Help center</li>
                <li>Contact us</li>
                <li>API status</li>
                <li>Documentaion</li>
            </ul>
        </div>
        <div className='p-4'>
            <h2 className='text-xl font-bold py-2'>Info</h2>
            <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Invest</li>
                <li>Legal</li>
            </ul>
        </div>
      </div>
      <div className='text-center py-4'>
        <p>Powered by The meal db</p>
      </div>
      
    </div>
  )
}

export default Footer
