import Section from './Section';
import Heading from './Heading';
import { roadmap } from '../constants';

const Roadmap = () => {
  return (
   <Section id='roadmap' className='overflow-hidden'>
        <div className='container md:pb-10'>
            <Heading tag='Ready to get started' title="What we're working on" />

            <div className='relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]'>
                {roadmap.map((item) => {
                    const status = item.status === "done" ? "Done" : "In progress";

                    
                })}
            </div>
        </div>
   </Section>
  )
}

export default Roadmap;
