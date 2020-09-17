/* eslint-disable no-undef */
import React, { useState } from 'react';
import TravelCard from '../TravelCard/TravelCard';
import travelData from '../../travelData/travelData';


const Home = () => {
    const data = travelData;
    // console.log(data);

    return (
        <div className="d-flex mt-4 container">
            {
                data.map(card => <TravelCard key={card.id} card={card}></TravelCard>)
            }
        </div>
    );
};

export default Home;