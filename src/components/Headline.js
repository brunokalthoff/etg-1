import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArtistContext } from '../ArtistContext';

export default function Headline() {
  const [artists] = useContext(ArtistContext);
  return (
    <div className='Page-Title'>
      <div>
        <div className="Headline">
          <h6>virtual exhibition</h6>
          <h1>ENTER THE GATEWAY #1</h1>

        </div>
        <p>Aliens are here! Finally, the long expected exhibition spaceship has landed. Enjoy a jolly February 2021 with visual and sonic artworks coming to earth all the way from where Hubble cannot gaze. Ever wondering what's happening at the edge of the universe? Take a look! Dude! Sweet! </p>
        <Link className='bigButton startTourButton' to={'/rooms/' + artists[0].slug}>Start Tour {'>>'} </Link>
      </div>
    </div>
  );
};