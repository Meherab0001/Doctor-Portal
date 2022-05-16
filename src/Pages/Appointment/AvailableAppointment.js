import { format } from 'date-fns';
import React, {  useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Teatment from '../Home/Teatment';


import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services,setService]=useState([]);
    const [treatMent,setTreatMent]=useState(null)
const formateDate=format(date,"PP")

/* const { isLoading, error, data:services,refetch } = useQuery('avilable',formateDate, () =>
     fetch(`http://localhost:5000/avilable?date=${formateDate}`).then(res =>
       res.json()   
     )
   ) */
    
 
  
    useEffect(()=>{
        fetch(`http://localhost:5000/avilable?date=${formateDate}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[formateDate,treatMent])
    return (
        <div>
            <h1 className='text-xl text-secondary font-bold my-12 text-center'>Available Service on:{format(date,'PP')}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                    services?.map(service =><Service
                    key={service._id}
                        service={service}
                        setTreatMent={setTreatMent}
                    ></Service>)
                }
            </div>
            {
                treatMent && <BookingModal date={date} treatMent={treatMent}
                setTreatMent={setTreatMent}
              
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;