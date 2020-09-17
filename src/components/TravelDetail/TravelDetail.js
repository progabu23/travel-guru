import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import travelData from '../../travelData/travelData';

const TravelDetail = () => {
    const { id } = useParams()
    const cardData = travelData.find(cd => cd.id == id)
    const { title, img, info } = cardData;
    const history = useHistory()

    const handleBooking = () => {
        history.push(`/hotel/`);
    }


    return (
        <div className="d-flex mt-4 container ">
            <div className="col-md-6">
                <div className="img img" style={{ paddingLeft: '180px' }}>
                    <img src={img} alt="" />
                </div>
                <div className="text p-4">
                    <h3 className="text-secondary text-center">{title}</h3>
                    <p className="text-secondary text-justify">{info}</p>
                </div>
            </div>
            <div className="col-md-6 mt-5">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Origin</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputText">Destination</label>
                        <input type="text" className="form-control" id="exampleInputText" />
                    </div>
                    <button onClick={() => handleBooking()} style={{backgroundColor: '#F9A51A', padding: '4px 55px', border: 'none', borderRadius: '5px'}}>Start Booking</button>
                </form>
            </div>
        </div>
    );
};

export default TravelDetail;