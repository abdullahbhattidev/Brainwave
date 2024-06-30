import React from 'react'
import { companyLogos } from '../constants'
import { lines } from '../assets'

const CompanyLogos = ({className}) => {
  return (
    <div className={className}>
        <h5 className='tagline text-center text-n-1/50 mb-6'>helping people create beautiful content at</h5>
        <ul className='flex justify-between mt-20 m-15'>
            {companyLogos.map((items, index)=>
            <li key={index}>
                <img src={items} alt={items} width={134} height={28}/>
            </li>)}
        </ul>
    </div>
  )
}

export default CompanyLogos