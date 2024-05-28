import Section from './Section';
import { smallSphere, stars } from '../assets';

const Pricing = () => {
  return (
    <Section id='pricing' className='overflow-hidden'>
        <div className='container relative z-2'>
            <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
                <img src={smallSphere} alt='Sphere' width={255} height={255} className='relative z-1' />
                <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                  <img src={stars} alt='Stars' />
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Pricing;
