import React from 'react';
import Banner from './Banner/Banner';
import NewItems from './NewItems/NewItems';
import Collection from './Collection/Collection';
import Products from './Products/Products';
import Ad from './ad/Ad';
import Insta from './Insta/Insta';
import Location from './Location/Location';


const Home=()  => {
    return (
        <div>
            <Banner/>
            <NewItems/>
            <Collection/>
            <Location/>
            <Products/>
            <Ad/>
            <Insta/>

        </div>

    );
};

export default Home;