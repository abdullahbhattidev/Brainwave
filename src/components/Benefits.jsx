import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants/index'
import Arrow from '../assets/svg/Arrow'
import { GradientLight } from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'

const Benefits = () => {
  return (
    <Section id="features">
        <div className='container relative z-2'>
            <Heading className="md:max-w-md lg:max-w-2xl text-center" title = "Chat Smarter, Not Harder with Brainwave"/>
        </div>
        <div className='flex justify-center flex-wrap gap-10 mb-10'>
            {benefits.map((items, index)=>
            <div key={index} className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]' 
            style={{backgroundImage: `url(${items.backgroundUrl})`}}>
                <div className='relative flex flex-col min-h-[22rem] p-[2.4rem] z-2 pointer-events-none'>
                    <h5 className='h5 mb-5'>{items.title}</h5>
                    <p className='body-2 mb-6 text-n-3'>{items.text}</p>
                    <div className='flex items-center mt-auto'>
                        <img src={items.iconUrl} alt={items} width={48} height={48} />
                        <p className='uppercase font-code font-bold tracking-wider text-xs ml-auto text-n-1'>Explore more</p>
                        <Arrow/>
                    </div>
                </div>
                {items.light && <GradientLight/>}
                <div className='absolute inset-0.5 bg-n-8' style={{clipPath: "url(#benefits)"}}>
                    <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-30'>
                        {items.imageUrl && 
                        <img src={items.imageUrl} width={380} height={360} className='w-full h-full object-cover overflow-hidden'/>
                        }
                    </div>
                </div>
                <ClipPath/>
            </div>
            )}
        </div>
    </Section>
  )
}

export default Benefits