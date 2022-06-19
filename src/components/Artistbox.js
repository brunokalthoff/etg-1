import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistContext';
import { useParams } from 'react-router-dom';

export default function Artistbox() {

  const [artists, getRoomNumber] = useContext(ArtistContext);
  const { room } = useParams();

  const roomNum = getRoomNumber(room);

  let src = '/img/avatars/avatar-' + room + '.jpg';
  let artist = artists[roomNum].name.toUpperCase();
  let place = artists[roomNum].place.toUpperCase();
  let alt = artists[roomNum].name + ' Avatar';


  return (

    <div className='ArtistBox'>
      <div className='ArtistCard'>

        <div className='box1'>
          <img src={src} alt={alt} />
        </div>
        <div className='box2'>
          <h3>{artist} </h3>
          <h4>{place}</h4>
        </div>


      </div>

    </div>
  )
}