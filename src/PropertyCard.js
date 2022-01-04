import React from 'react'
import './PropertyCard.css'
import WeekendIcon from '@mui/icons-material/Weekend';
import BedIcon from '@mui/icons-material/Bed';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BathtubIcon from '@mui/icons-material/Bathtub';
import VerifiedIcon from '@mui/icons-material/Verified';
import {useNavigate} from 'react-router-dom';

function PropertyCard({url: url, title: title, desc:desc}) {
    const navigate = useNavigate();
    const viewProperty = (event) => {
        event.preventDefault();
        navigate("/properties");
    }
    return (
        <div className='property__card'>
            <img src={url} alt={url} />
            <div className="property__card__body">
                <div className="title__div">
                    <h3>{title}</h3>
                    <span className="verifyDiv">
                        <VerifiedIcon className='verifyIcon'/>
                        VERIFIED
                    </span>
                </div>
                <hr/>
                <h5>Rahoon Road, Galway, H91 HR29</h5>
                <div className="property__card__icons">
                    <span className="property__card__icon__span">
                        <WeekendIcon className='property__card__icon'/>
                        Living Room
                    </span>
                    <span className="property__card__icon__span">
                        <BedIcon className='property__card__icon'/>
                        2 BedRoom
                    </span>
                    <span className="property__card__icon__span">
                        <KitchenIcon className='property__card__icon'/>
                        Kitchen
                    </span>
                    <span className="property__card__icon__span">
                        <BathtubIcon className='property__card__icon'/>
                        BathRoom
                    </span>                    
                </div>
                <p>{desc}</p>
                <button onClick={viewProperty}>VIEW PROPERTY</button>
            </div>
        </div>
    )
}

export default PropertyCard
