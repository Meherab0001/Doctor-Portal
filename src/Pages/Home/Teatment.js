import React from 'react';
import teatment from '../../assets//images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Teatment = () => {
    return (

        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img style={{
                    width: ' 458px',
                    height: "576px"
                }} src={teatment} />
                <div>
                    <h1 className="text-5xl font-bold">Exceptionla Dental Care,on Your Terms</h1>
                    <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                   <PrimaryButton>Get started</PrimaryButton>
                </div>
            </div>
        </div>

    );
};

export default Teatment;