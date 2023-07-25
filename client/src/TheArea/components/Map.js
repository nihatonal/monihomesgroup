import React from 'react';

import point from '../../assets/images/area/point.png';
import './Map.css';
function Map(props) {
    // console.log(props.beaches)
    return (
        <div className='section-card-container'>
            <div className="map-container">
                <h2 className="map-desc">{props.map_desc}</h2>
                <div className="map-wrapper">
                    {props.beaches.map((item) =>
                        <div className="map-point">
                            <p>{item}</p>
                            <img src={point} alt='point' />
                        </div>
                    )}

                    {/* <div className="map-point">
                        <p>{props.copenhagen}</p>
                        <img src={point} alt='point' />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Map;