import React from 'react';
import { Link } from 'react-router-dom';


export default function Start() {

    return (
        <div className='Start'>
            <Link to='/rooms/all'><div class='bigButton'>Exhibition</div></Link>
        </div>
    )
}