import React from 'react'
import './Navigation.css'

function Navigation() {
    return (
        <div className='navigation'>
            <nav>
                <div>
                    <a className='logo'>STUDENT PAD</a>
                </div>
                <div>
                    <ul>
                        <li><a>Signup</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Support</a></li>
                        <li><a>Help</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
