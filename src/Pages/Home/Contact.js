import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <section className=' my-28'
            style={{
                background: `url(${appointment})`
            }}
        >

            <div className='text-center my-3'>
                <h3 className='text-xl text-primary'>Contact us</h3>
                <h2 className='text-3xl text-white my-2 '>Stay connected with us</h2>

            </div >
          <div className='flex justify-center'>
          <form
                onSubmit={handleSubmit}
                className='grid grid-cols-1 gap-3  mt-3 py-5  w-50 h-50'>
                <input type="text" name='name' placeholder="Email Address"  className="input input-bordered w-full max-w-xs" />
                <input type="text" name='subject' placeholder="Subject"  className="input input-bordered w-full max-w-xs" />
                <textarea className="textarea" placeholder="Your message"></textarea>

                <input type="submit" value="Sumbit"  className="btn btn-secondary w-full max-w-xs" />

            </form>
          </div>
        </section>
    );
};

export default Contact;