import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppoinment = () => {
    return (
       <section className='flex justify-center items-center mt-20'
       style={{
           background:`url(${appointment})`
       }}
       >
           <div className='flex-1 hidden lg:block'>
               <img className='mt-[-100px]' src={doctor} alt="" />
           </div>
           <div className='flex-1'>
               <h3 className='text-xl text-primary'>Appoinmnet</h3>
               <h2 className='text-3xl text-white my-2 '>Make an appointmnet today</h2>
               <p className='text-white my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora pariatur eos in sequi, harum quaerat ex ratione, porro placeat eius sit accusamus exercitationem, sint quidem corporis possimus nemo. Reiciendis.</p>
               <PrimaryButton >Get Starts</PrimaryButton>
           </div>
       </section>
    );
};

export default MakeAppoinment;