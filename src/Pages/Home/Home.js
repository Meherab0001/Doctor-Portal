import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Teatment from './Teatment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
         <Banner></Banner>
         <Info></Info>
         <Services></Services>
         <Teatment></Teatment>
         <MakeAppoinment></MakeAppoinment>
         <Testimonial></Testimonial>
         <Contact></Contact>
         <Footer></Footer>
        </div>
    );
};

export default Home;