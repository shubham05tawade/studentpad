import React, {useState} from 'react'
import './Home.css'
import Navigation from './Navigation'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PropertyCard from './PropertyCard';

function Home() {
    const [roomCount, setRoomCount] = useState(1);
    const [personCount, setPersonCount] = useState(1);
    return (
        <div className='home'>
            <Navigation/>
            <div className="banner">
                <div className="banner__section">
                    <div>
                        <div className='banner__section__div'>
                            <label>Enter city name or area</label>
                            <div>
                                <input type="search" name="search" id="search" placeholder='Dublin' className="search" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='banner__section__div'>
                            <label>Enter person count</label>
                            <div>
                                <RemoveCircleOutlineIcon className='banner__icons'/>
                                <input type="text" name="people" id="people" placeholder='Number of persons' className="count" value={personCount}/>
                                <AddCircleOutlineIcon className='banner__icons'/> 
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='banner__section__div'>
                            <label>Enter room count</label>
                            <div>
                                <RemoveCircleOutlineIcon className='banner__icons'/>
                                <input type="text" name="rooms" id="rooms" placeholder='Number of rooms' className="count" value={roomCount}/>
                                <AddCircleOutlineIcon className='banner__icons'/>
                            </div>
                        </div>
                    </div>
                    <div className='button__container'>
                        <button>Search</button>
                    </div>
                </div>
            </div>
            <div className="home__section__one">
                <h1>BEST PROPERTIES</h1>
                <hr />
                <div className="properties__container">
                    <PropertyCard url='https://photos.cdn.dsch.ie/ZTE4NjUxNzZkODUzNDNmNjczMzBiMGI0MzAzZjA1ZGFAwiAhFp3nElzOo9HSvECqaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzgvYS84YTI1NzIwNTI4NGIxYmMyMmJlMmQ5ZGI0ZTg3ZGNjNS5qcGd8fHwxMjAwfHx8fHx8fA==' title='sadcs' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti soluta explicabo, aspernatur veniam voluptate architecto iusto quaerat deleniti hic! Ad maxime sapiente voluptate at expedita praesentium facilis ullam magnam.'/>
                    <PropertyCard url='https://photos.cdn.dsch.ie/ZTE4NjUxNzZkODUzNDNmNjczMzBiMGI0MzAzZjA1ZGFAwiAhFp3nElzOo9HSvECqaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzgvYS84YTI1NzIwNTI4NGIxYmMyMmJlMmQ5ZGI0ZTg3ZGNjNS5qcGd8fHwxMjAwfHx8fHx8fA==' title='sadcs' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti soluta explicabo, aspernatur veniam voluptate architecto iusto quaerat deleniti hic! Ad maxime sapiente voluptate at expedita praesentium facilis ullam magnam.'/>
                    <PropertyCard url='https://photos.cdn.dsch.ie/ZTE4NjUxNzZkODUzNDNmNjczMzBiMGI0MzAzZjA1ZGFAwiAhFp3nElzOo9HSvECqaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzgvYS84YTI1NzIwNTI4NGIxYmMyMmJlMmQ5ZGI0ZTg3ZGNjNS5qcGd8fHwxMjAwfHx8fHx8fA==' title='sadcs' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti soluta explicabo, aspernatur veniam voluptate architecto iusto quaerat deleniti hic! Ad maxime sapiente voluptate at expedita praesentium facilis ullam magnam.'/>
                    <PropertyCard url='https://photos.cdn.dsch.ie/ZTE4NjUxNzZkODUzNDNmNjczMzBiMGI0MzAzZjA1ZGFAwiAhFp3nElzOo9HSvECqaHR0cHM6Ly9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS9tZWRpYW1hc3Rlci1zM2V1LzgvYS84YTI1NzIwNTI4NGIxYmMyMmJlMmQ5ZGI0ZTg3ZGNjNS5qcGd8fHwxMjAwfHx8fHx8fA==' title='sadcs' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corrupti soluta explicabo, aspernatur veniam voluptate architecto iusto quaerat deleniti hic! Ad maxime sapiente voluptate at expedita praesentium facilis ullam magnam.'/>
                </div>
            </div>
        </div>
    )
}

export default Home
