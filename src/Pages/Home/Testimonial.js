import React from 'react';
import qoute from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson herry ',
            description: 'Lorem ',
            img: people1,
            loaction:'california'
        },
        {
            _id: 2,
            name: 'Jhon pety',
            description: 'Lorem ',
            img: people2,
            loaction:'california'
        },
        {
            _id: 3,
            name: 'Wil makson',
            description: 'Lorem ',
            img: people3,
            location:'california'
        }
    ]
    return (

       
        <section className='my-28'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className="text-xl font-bold text-primary">Testimonial</h3>
                    <h2 className="text-3xl">What our patients say? </h2>
                </div>
                <div>
                    <img  src={qoute} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    reviews.map(review=>
                        
                        <Review
                        key={review._id}
                        review={review}
                        ></Review>
                        )
                }
            </div>
        </section>
    );
};

export default Testimonial;