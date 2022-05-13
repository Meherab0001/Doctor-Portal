import React from 'react';
import Service from './Service';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores officiis recusandae distinctio.</p>

            </div>
            <div className="flex items-center">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} />
                    </div>
                </div>
                    <div>
                        <h2 className="text-xl">{review.name}</h2>
                        <h5>{review.location}</h5>
                    </div>
            </div>
        </div>
    );
};

export default Review;