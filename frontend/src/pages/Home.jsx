import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

// TODO
// Create a new type of slider item to make the front page look better
// Maybe something like a carousel with items from our site, doesn't have to be dynamic
const Home = () => {
    return (
        <div>
            <Navbar/>
            <br/>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh', marginBottom:'45px'}}>
                <Carousel/>
            </div>
            <br/>
            <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth:'800px', margin:'0 auto'}}>
            Transforming the way you run your restaurant. Our intuitive management app brings efficiency to your fingertips, 
            streamlining operations, enhancing customer experiences, and empowering your team. From order to table, 
            we're here to elevate your restaurant's success.
            </h1>
        </div>
    )
}

export default Home