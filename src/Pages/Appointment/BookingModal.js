import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatMent, date,setTreatMent, }) => {
    const [user, loading, error] = useAuthState(auth);

    const { _id,name, slots } = treatMent

    const handleBooking=event=>{
        event.preventDefault()
        const slot=event.target.slot.value;
      
        const formattedDate=format(date,"PP")
      const booking=  {
            treatMentId:_id,
            treatment:name,
            date:formattedDate,
            slot,
            patient:user.email,
            patientName:user.displayName,
            phone: event.target.phone.value


        }

   

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })  
        .then(res =>res.json())
        .then(data =>{
          console.log(data.success)
          if(data.success){
              toast(`Appointment is set, ${formattedDate} at ${slot}`)
            }
            else{
                
                toast.error(`Allready have an Appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
        })
       
            setTreatMent(null)

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal"  className="modal-toggle" />
            <div  className="modal modal-bottom sm:modal-middle">
                <div  className="modal-box">
                    <label for="booking-modal"  className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3  className="font-bold text-lg text-secondary">Booking for:{name}</h3>
                    <form 
                    onSubmit={handleBooking}
                    className='grid grid-cols-1 gap-3 justify-center mt-3'>
                        <input type="text" disabled value={format(date, 'PP')}  className="input input-bordered w-full max-w-xs" />
                        <select name='slot'  className="select select-primary w-full max-w-xs">
                           {
                               slots.map((slot,index )=><option
                               key={index}
                               value={slot}>{slot}</option>)
                           }
                       
                           
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName}  className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' disabled value={user?.email}   className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone"  className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Sumbit"  className="btn btn-secondary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>

    );
};

export default BookingModal;