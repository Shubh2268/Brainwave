import Section from './Section';
import { collabContent } from '../constants';
import { check } from '../assets';

const Collaboration = () => {
    return (
        <Section crosses>
            <div className='container lg:flex'>
                <div className='max-w-[25rem]'>
                    <h2 className='h2 mb-4 md:mb-8'>AI Chat App for seamless collaboration</h2>

                    <ul className='max-w-[22rem] mb-10 md:mb-14'>
                        {collabContent.map((item) => (
                            <li key={item.id} className='mb-3 py-3'>
                                <div className='flex items-center'>
                                    <img src={check} alt="check" width={24} height={24} />
                                    <h6 className='body-2 ml-5'>{item.title}</h6>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Section>
    )
}

export default Collaboration;
