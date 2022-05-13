import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <h1 className='text-xl text-secondary font-bold text-center'>Available Service on:{format(date,'PP')}</h1>
        </div>
    );
};

export default AvailableAppointment;