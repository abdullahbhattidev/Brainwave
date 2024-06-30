
import { check } from '../assets'
import { collabContent } from '../constants'
import Button from './Button'
import Section from './Section'

const Collaboration = () => {
  return (
    <Section crosses>
        <div className='container lg:flex'> 
            <div className='max-w-[25rem]'>
                <h2 className='h2 mb-4 md:mb-8'>AI Chat App for seamless collaboration</h2>
                <ul className='max-w-[24rem] mb-10 md:mb-14'>
                    {collabContent.map((items, id)=>
                    <li key={id} className='mb-3 py-3'>
                        <div className='flex items-center'>
                            <img src={check} alt={check} width={24} height={24} />
                            <h6 className='body-2 ml-5'>{items.title}</h6>
                        </div>
                        {items.text && <p className='body-2 text-n-4 mt-3'>{items.text}</p>}
                    </li>
                    )}
                </ul>
                <Button>Try it now!</Button>
            </div>
        </div>
    </Section>
  )
}

export default Collaboration