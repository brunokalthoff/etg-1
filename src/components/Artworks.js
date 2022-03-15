import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { ArtistContext } from '../ArtistContext';
import AudioPlayer from './AudioPlayer.jsx';

export default function Artworks() {

  const [artists, getRoomNumber] = useContext(ArtistContext);
  const { room } = useParams();

  const roomNum = getRoomNumber(room);
  console.log(roomNum)

  let display = (
    <div className='Artworks'>
      {/* PICTURES */}
      {artists[roomNum].art.images && artists[roomNum].art.images.map((piece, index) =>
      (
        <div className='Art'>
          <img key={index} src={process.env.PUBLIC_URL + '/img/artists/' + room + '/' + piece.title + piece.suffix} alt={piece.title} />
        </div>
      )
      )
      }
      {/* VIDEOS */}
      {artists[roomNum].art.videos && artists[roomNum].art.videos.map((piece, index) =>
      (
        <div className='Art'>
          <iframe key={index} title={artists[roomNum].name}
            src={piece}
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      )
      )
      }

      {/* AUDIOS */}
      {artists[roomNum].art.audios &&
        <div className='MaximeBG'>
          <AudioPlayer />
        </div>

      }
    </div>
  )
    ;


  return (
    <>
      {display}
    </>
  )
};



