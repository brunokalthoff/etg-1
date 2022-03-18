import React, { useEffect } from 'react';
import Nav from './Nav';
import Artworks from './Artworks';
import Artistbox from './Artistbox';

export default function Room() {
    useEffect(() => { window.scrollTo(0, 0); });

    return (

        <div className='Room'>
            <Nav />
            <Artistbox />
            <Artworks />
        </div>

    )
}