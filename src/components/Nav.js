import React, { useContext } from 'react';
import { ArtistContext } from '../ArtistContext';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";
import { AiOutlineRollback } from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";


export default function Nav() {

  const [artists, getRoomNumber] = useContext(ArtistContext);
  const { room } = useParams();

  let index = 0;
  let prev = 0;
  let next = 0;

  if (room) {
    index = getRoomNumber(room);
    if (index === 0) { prev = 'all'; next = artists[index + 1].slug; }
    else if (index === artists.length - 1) { prev = artists[index - 1].slug; next = 'all' }
    else { prev = artists[index - 1].slug; next = artists[index + 1].slug; }
  }

  const handleToggle = () => {
    document.querySelector('.navLinks').classList.toggle('active')
  }


  return (
    <header>
      {!room && (
        <nav className='navbar'>
        <NavLink className='etg' to='/rooms/all'>etg#1</NavLink>
    
        <div className='navLinks'>
          {/* <NavLink className={navData => navData.isActive ? 'active' : 'inactive'} to='/rooms/all'>All Rooms</NavLink> */}
          <div className='dropdown'>
    
            <div className='dropbtn'>Artists ▼</div>
            <div className='dropdownContent'>
    
              {artists.map(r => (
                <NavLink key={r.roomN} className={navData => navData.isActive ? 'active dropdownContentLink' : 'inactive dropdownContentLink'} to={'/rooms/' + r.slug}>
                  {r.name} ({r.roomN})
                </NavLink>
              )
              )}
    
            </div>
    
          </div>
          <NavLink className={navData => navData.isActive ? 'active' : 'inactive'} to='/about'>.!?</NavLink>
        </div>
        <GiHamburgerMenu onClick={handleToggle} className='hamburger' size={28} />
      </nav>
    
      )}
      {room && (
        <nav className='navbar'>

        <NavLink className='etg' to='/rooms/all'>etg#1</NavLink>
    
        <div className='pagination'>
          <NavLink to={'/rooms/' + prev}>{prev === 'all' ? '' : <TiChevronLeft size={20} />}</NavLink>
          <p style={{ display: 'block' }}> <span className='paginationNumber' style={index + 1 < 10 ? { padding: '0.2rem .5rem' } : { padding: '0.25rem .3rem' }}>{index + 1}</span><span className='paginationName'>{artists[index].shortName}</span> </p>
          <NavLink to={'/rooms/' + next}>{next === 'all' ? <AiOutlineRollback size={20} /> : <TiChevronRight size={20} />}</NavLink>
        </div>
    
        <div className='navLinks'>
          {/* <NavLink className={navData => navData.isActive ? 'active' : 'inactive'} to='/rooms/all'><AiFillHome size={20}/></NavLink> */}
          <div className='dropdown'>
    
            <div className='dropbtn'>Artists ▼</div>
            <div className='dropdownContent'>
              {artists.map(r => (
                <NavLink key={r.roomN} className={navData => navData.isActive ? 'active dropdownContentLink' : 'inactive dropdownContentLink'} to={'/rooms/' + r.slug}>
                  {r.name} ({r.roomN})
                </NavLink>
              )
              )}
            </div>
          </div>
          <NavLink className={navData => navData.isActive ? 'active' : 'inactive'} to='/about'>.!? </NavLink>
        </div>
        <GiHamburgerMenu onClick={handleToggle} className='hamburger' size={28} />
      </nav>
      )}
    </header>
  )
};