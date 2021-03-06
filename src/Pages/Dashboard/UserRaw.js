import React from 'react';
import { toast } from 'react-toastify';

const UserRaw = ({user,index,refetch}) => {
    const {email,role} =user
  const makeAdmin=()=>{
fetch(`http://localhost:5000/user/admin/${email}`,{
    method:"PUT",
    headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
    
})
.then(res =>{
    if(res.status ===403){
        toast.error('Fail to make admin')
    }
    res.json()})
.then(data =>{
  if(data.modifiedCount >0){
    refetch()
    toast.success('Successfully make an Admin')
  }
})
  }
    return (
        <tr>
            <th>{index +1}</th>
            <td>{email}</td>
            <td> {role !== 'admin' &&<button
            onClick={makeAdmin}
            class="btn btn-xs">Make Admin</button>}</td>
            <td> <button class="btn btn-xs">Remove Admin</button></td>
           
          
        </tr>
  

    );
};

export default UserRaw;