import React from 'react';
import Service from './Service';
import fluride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whiteing from '../../assets/images/whitening.png'


const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluroide Treatment',
            description: 'Lorem ',
            img: fluride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whiteing',
            description: 'Lorem ',
            img: whiteing
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary  text-xl font-bold uppercase'>Our services</h2>
                <h2 className='text-4xl mt-5'>Service we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
          
        </div>
    );
};

export default Services;