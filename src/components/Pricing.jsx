import Section from './Section';
import { smallSphere, stars } from '../assets';

const Pricing = () => {
  return (
    <Section id='pricing' className='overflow-hidden'>
        <div className='container relative z-2'>
            <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
                <img src={smallSphere} alt='Sphere' width={255} height={255} />
            </div>
        </div>
    </Section>
  )
}

export default Pricing;
