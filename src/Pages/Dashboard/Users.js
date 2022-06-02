import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRaw from './UserRaw';


const Users = () => {

    const { data: users, isLoading,refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(users)
    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div>
            <h2>All user here :{users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
               
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                
                  
                        {
                              
                          users.map((user,index) =>
                          <UserRaw
                          user={user}
                          key={user._id}
                          index={index}
                          refetch={refetch}
                          ></UserRaw>)
                        }
                          
                    
                 
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;