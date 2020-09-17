import React from 'react';

const HotelDetail = (props) => {
    const { title, img } = props.hotel
    return (
        <>
            <div class="card mt-5 mr-2">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                </div>
            </div>
        </>
    );
};

export default HotelDetail;