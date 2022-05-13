import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Contact = () => {
    return (
        <section className=' my-28'
            style={{
                background: `url(${appointment})`
            }}
        >

            <div className='text-center my-3'>
                <h3 className='text-xl text-primary'>Contact us</h3>
                <h2 className='text-3xl text-white my-2 '>Stay connected with us</h2>
               
            </div>
            <div className='text-center p-5'>
                <input  className=' py-2 text-xl border rounded' type="email" placeholder='Email Address' />
                <br />
                <input  className='mt-3 py-2 text-xl border rounded' type="text" placeholder='Subjects'/>
                <br />
                <textarea className='mt-3 py-2 text-xl border rounded'  name="" id="" placeholder='Your text' cols="24" rows="3"></textarea>
                <PrimaryButton>Submit</PrimaryButton>
               
            </div>
           
        </section>
    );
};

export default Contact;