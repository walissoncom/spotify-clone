import React from 'react';

import { useDataLayerValue } from '../../DataLayerContext';
import Header from '../Header/Header';

import './Body.css';

function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className='body'>
            <Header spotify={spotify} />

            <div className='body__info'>
                <img src={discover_weekly?.images[0].url} alt='Discover Weekly' />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Body;