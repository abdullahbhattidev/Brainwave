import React from 'react'
import { notificationImages } from '../constants'
import { notification1 } from '../assets'

const Notification = ({className}) => {
  return (
    <div className= {`${className || ""} flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur rounded-2xl border border-n-1/10 gap-5 `}>
        <img src={notification1} className='rounded-2xl' width={64} height={64} />
        <div className='flex-1'>
            <h6 className='mb-1 font-semibold text-base'>Code generation</h6>
            <div className='flex justify-between items-center'>
                <ul className='flex -m-0.5'>
                    {notificationImages.map((items, index)=> 
                    <li key={index} className='border-2 border-n-12 w-6 h-6 flex rounded-full overflow-hidden'>
                        <img 
                        src={items}
                        alt='notification images'
                        width={20}
                        height={20}
                        className='w-full'
                        />
                    </li> ) }
                </ul>
                <div className='body-2 text-n-13'>1m ago</div>
            </div>
        </div>
    </div>
  )
}

export default Notification