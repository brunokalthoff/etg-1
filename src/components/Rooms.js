import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistContext';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Headline from './Headline';
import Footer from './Footer';

export default function Rooms() {
  const [artists] = useContext(ArtistContext);
  return (
    <>
      <Nav />
      <Headline />
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      <div className='roomLinksContainer'>
        {artists.map((x, i) => (
          <Link className={`Room-Link ship${i % 5}`} to={'/rooms/' + x.slug} key={x.roomN}>
            <div>
              <img src={'/img/ufos/' + x.roomN + '.png'} alt={x.name} />
            </div>
            <p><small>Room {x.roomN}</small></p><p>
              {x.name}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </>
  )
};