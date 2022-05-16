import React from 'react';


const Service = ({service,setTreatMent}) => {
    const {name,slots}=service
    return (
        <div  className="card lg:card-side bg-base-100 shadow-xl">
            <div  className="card-body">
                <h2  className="card-title">{name}</h2>
                <p>{
                    slots.length? 
                    <span>{slots[0]}</span>: <span className='text-red-500'>No slot Avilable.Try another date</span>
                    }</p>
                <p>{slots.length} {slots.length > 1? 'spaces':'space'}     avilable</p>
                <div  className="card-actions">
             
                <label for="booking-modal"
                   disabled={slots.length===0}
                   onClick={()=>setTreatMent(service)}
                 className= "btn btn-secondary text-white uppercase  justify-center">book appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;