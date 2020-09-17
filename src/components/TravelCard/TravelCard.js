import React from 'react';
import { Link } from 'react-router-dom';
import './TravelCard.css';

const TravelCard = (props) => {
    const { title, info, img, id } = props.card;

    return (
        <>
            <div className="box mr-5">
                <div className="img pl-5 ml-5">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <h3 className="text-secondary text-center">{title}</h3>
                    <p className="text-secondary text-justify">{info}</p>
                    <div className="button">
                        <Link to={"/Card/" + id}>
                            <button>Booking</button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TravelCard;