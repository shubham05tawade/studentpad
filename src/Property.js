import React, {useState, useEffect} from 'react'
import './Property.css'
import Navigation from './Navigation';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import 'mapbox-gl/dist/mapbox-gl.css';
import { Carousel } from 'react-responsive-carousel';
import WeekendIcon from '@mui/icons-material/Weekend';
import BedIcon from '@mui/icons-material/Bed';
import KitchenIcon from '@mui/icons-material/Kitchen';
import BathtubIcon from '@mui/icons-material/Bathtub';
import HouseIcon from '@mui/icons-material/House';
import TungstenIcon from '@mui/icons-material/Tungsten';
import WifiIcon from '@mui/icons-material/Wifi';
import DeleteIcon from '@mui/icons-material/Delete';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ALDILogo from './assets/ALDI.png';
import TescoLogo from './assets/Tesco.png';
import DunnesLogo from './assets/DunnesStores.png';
import LidlLogo from './assets/lidl.png';
import DefaultStore from './assets/DefaultStore.png'
import NUIGLogo from './assets/NUIG.png'
import GMITLogo from './assets/GMIT.png'

function Property() {
    const [imageArr, setImageArr] = useState(["https://photos.cdn.dsch.ie/ZWMwMmY2NzljMmNhYzY1NzY1MTI0Njk1NzBkM2Q0ZjQXs93XY-n8zJD1fffuq7koaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzgvOC84OGY5MDRkNDg3N2NjYTdlOTU3MTdjZDBmNjg5MzcxYS5qcGd8fHx8fHwxNDQweDk2MHx8fHw=.webp", "https://photos.cdn.dsch.ie/ZWMwMmY2NzljMmNhYzY1NzY1MTI0Njk1NzBkM2Q0ZjQXs93XY-n8zJD1fffuq7koaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzgvOC84OGY5MDRkNDg3N2NjYTdlOTU3MTdjZDBmNjg5MzcxYS5qcGd8fHx8fHwxNDQweDk2MHx8fHw=.webp", "https://photos.cdn.dsch.ie/ZWMwMmY2NzljMmNhYzY1NzY1MTI0Njk1NzBkM2Q0ZjQXs93XY-n8zJD1fffuq7koaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzgvOC84OGY5MDRkNDg3N2NjYTdlOTU3MTdjZDBmNjg5MzcxYS5qcGd8fHx8fHwxNDQweDk2MHx8fHw=.webp", "https://photos.cdn.dsch.ie/ZWMwMmY2NzljMmNhYzY1NzY1MTI0Njk1NzBkM2Q0ZjQXs93XY-n8zJD1fffuq7koaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzgvOC84OGY5MDRkNDg3N2NjYTdlOTU3MTdjZDBmNjg5MzcxYS5qcGd8fHx8fHwxNDQweDk2MHx8fHw=.webp"]);
    const position = [53.271477, -9.085348];
    const [superMarket, setSuperMarket] = useState(null);
    const [university, setUniversity] = useState(null);
    const [location, setLocation] = useState(null);
    const [superMarketImg, setSuperMarketImg] = useState(null);
    useEffect(() => {
        async function nearbyGroceries(){
            const groceriesResponse = await fetch('https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=circle:-9.085348,53.271477,5000&bias=proximity:-9.085348,53.271477&limit=20&apiKey=2c3257ce72744b66b26d42212166c642')
            const groceriesJson = await groceriesResponse.json();
            setSuperMarket(groceriesJson);
            console.log(groceriesJson);
        }
        async function nearbyUniversities(){
            const universityResponse = await fetch('https://api.geoapify.com/v2/places?categories=education.university&filter=circle:-9.085348,53.271477,5000&bias=proximity:-9.085348,53.271477&limit=20&apiKey=2c3257ce72744b66b26d42212166c642')
            const universityJson = await universityResponse.json();
            setUniversity(universityJson);
        }
        async function getLatLngByPostalCode(){
            const latlngResponse = await fetch("https://trueway-geocoding.p.rapidapi.com/Geocode?address=H91%20HR29&language=en", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "trueway-geocoding.p.rapidapi.com",
                    "x-rapidapi-key": "33033ba7efmsh7bbc42e29d81106p11c421jsne43d7337b502"
                }
            });
            const latlngJson = await latlngResponse.json();
            setLocation(latlngJson);
            console.log(latlngJson)
        }
        if(superMarket==null || superMarket.length==0)
            nearbyGroceries();
        if(university==null || university.length==0)    
            nearbyUniversities();
        if(location==null || location.length==0)
            getLatLngByPostalCode();

        const L = require("leaflet");

        delete L.Icon.Default.prototype._getIconUrl;

        L.Icon.Default.mergeOptions({
        iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
        iconUrl: require("leaflet/dist/images/marker-icon.png"),
        shadowUrl: require("leaflet/dist/images/marker-shadow.png")
        });
    }, [superMarket])
    return (
        <div className='property'>
            <Navigation/>
            <div className="property__section">
                <div className="carousel__section">
                    <div className="carousel__container">
                        <Carousel autoPlay interval='3000' showArrows className='carousel'>
                            {
                                imageArr.map((image) => (
                                    <div>
                                        <img src={image} />
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="property__info__section">
                    <div className="property__left__section">
                        <h1>$1,700 per month</h1>
                        <h5>47 Forster Place, College Road, Co. Galway</h5>
                        <div className="property__icons">
                            <span className="property__icon__span">
                                <WeekendIcon className='property__icon'/>
                                Living Room
                            </span>
                            <span className="property__icon__span">
                                <BedIcon className='property__icon'/>
                                2 BedRoom
                            </span>
                            <span className="property__icon__span">
                                <KitchenIcon className='property__icon'/>
                                Kitchen
                            </span>
                            <span className="property__icon__span">
                                <BathtubIcon className='property__icon'/>
                                BathRoom
                            </span>                    
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quidem nostrum facilis provident commodi totam repellendus, error dolorum facere, eum ducimus nemo eveniet debitis officiis, pariatur dignissimos fuga omnis. Natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi inventore harum, sunt dolor dignissimos libero ducimus rerum architecto laborum quam, aliquid impedit animi laboriosam accusamus? Ullam inventore natus officia ad!</p>
                        <hr />
                        <div className="additional__info__section">
                            <h3>RENT BREAKDOWN</h3>
                            <p>
                                <li><HouseIcon className='info__icon'/> Basic Rent: <span className='price__breakdown'>$1500</span></li>
                                <li><TungstenIcon className='info__icon'/> Electricity Charges: <span className='price__breakdown'>$250</span></li>
                                <li><WifiIcon className='info__icon'/> Internet Charges: <span className='price__breakdown'>$50</span></li>
                                <li><DeleteIcon className='info__icon'/> Bin Charges: <span className='price__breakdown'>$100</span></li>
                            </p>
                        </div>
                        { superMarket!=null ? 
                            <>  
                            <hr />
                            <div className="additional__info__section">
                                <h3>NEARBY SUPERMARKET</h3>
                                <div className="supermarket__section">
                                    <span>
                                        {
                                            superMarket?.features[0]?.properties?.name == 'ALDI' ? <><img src={ALDILogo} /></> : superMarket?.features[0]?.properties?.name == 'Dunnes Stores' ? <><img src={DunnesLogo} /></> : <></>
                                        }
                                        <p>{superMarket?.features[0]?.properties?.name+' within '+ superMarket?.features[0]?.properties?.distance + ' meters'}</p>
                                    </span>
                                    <span>
                                        {
                                            superMarket?.features[1]?.properties?.name == 'ALDI' ? <><img src={ALDILogo} /></> : superMarket?.features[1]?.properties?.name == 'Dunnes Stores' ? <><img src={DunnesLogo} /></> : <></>
                                        }
                                        <p>{superMarket?.features[1]?.properties?.name+' within '+ superMarket?.features[1]?.properties?.distance + ' meters'}</p>
                                    </span>
                                    <span>
                                        {
                                            superMarket?.features[2]?.properties?.name == 'ALDI' ? <><img src={ALDILogo} /></> : superMarket?.features[2]?.properties?.name == 'Dunnes Stores' ? <><img src={DunnesLogo} /></> : superMarket?.features[2]?.properties?.name == 'Lidl' ? <><img src={LidlLogo} /></> : superMarket?.features[2]?.properties?.name == 'Tesco' ? <><img src={TescoLogo} /></> : <><img src={DefaultStore} /></>
                                        }
                                        <p>{superMarket?.features[2]?.properties?.name+' within '+ superMarket?.features[2]?.properties?.distance + ' meters'}</p>
                                    </span>
                                </div>
                            </div>
                            </>
                            :
                            <>
                            </>
                        }
                        <hr />
                        <div className="additional__info__section">
                            <h3>MAP VIEW</h3>
                            <MapContainer center={[53.2714683, -9.0853459]} zoom={17} className="maps" style={{width:'90%',height: '500px'}}>
                                <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        {'Dunaras Village'}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                        <hr/>
                        <div className='additional__info__section'>
                            <h3>NEARBY UNIVERSITIES</h3>
                            <div className="university__section">
                                    {university!=null ? 
                                        university?.features.map((uni, index) => (
                                            uni?.properties?.name == 'National University of Ireland, Galway' ? <span><img src={NUIGLogo}/> <p>{uni?.properties?.name + " within "+ uni?.properties?.distance + "m"}</p> </span> : uni?.properties?.name == 'Galway-Mayo Institute of Technology' ? <span><img src={GMITLogo}/><p>{uni?.properties?.name + " within "+ uni?.properties?.distance + "m"}</p></span> :  <></>
                                        ))
                                        :
                                        <></>
                                    }
                            </div>
                        </div>
                    </div>
                    <div className="property__right__section">
                        <div className="agent__card">
                            <img src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" alt="" />
                            <h4>AGENT DETAILS</h4>
                            <h5>Agent Name</h5>
                            <p>Contact: 0123456789</p>
                            <p>Email: johndoe@email.com</p>
                            <button>CHAT WITH AGENT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Property
