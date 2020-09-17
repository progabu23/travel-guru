import React from 'react';
import HotelData from './HotelData';
import HotelDetail from './HotelDetail';

const Hotel = () => {
    const dataHotel = HotelData

    return (
        <>
            <div className="d-flex mt-4 container">
                {
                    dataHotel.map(hotel => <HotelDetail hotel={hotel}></HotelDetail>)
                }
            </div>
        </>
    );
};

export default Hotel;