import React, { useEffect, useContext } from 'react';
import { ArtistContext } from '../ArtistContext';
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { TiChevronRight, TiChevronLeft } from "react-icons/ti";
import { AiOutlineRollback } from "react-icons/ai";
import { CgMenu, CgClose } from "react-icons/cg";


export default function Nav() {
  // useEffect(() => {
  //   console.log('adding event listener');
  //   document.addEventListener('mousedown', (e) => {
  //     console.log(e.target.classList)
  //     if (e.target.classList.contains('dropbtn')) return;
  //     if (e.target.classList.contains('inactive')) return;
  //     else {
  //       document.querySelector('.dropdownContent').classList.toggle('open');
  //     }
  //   });
  // }, []);


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
    document.querySelector('.navLinks').classList.toggle('show');
    document.querySelector('.hamburgerToggle').classList.toggle('hide');
    document.querySelector('.closeToggle').classList.toggle('show');
  }

  const handleClick = () => {
    document.querySelector('.dropdownContent').classList.toggle('open');
  }

  return (
    <header>
      {!room && (
        <nav className='navbar'>
          <Link className='etg' to='/rooms/all'>etg#1</Link>
          <div className='navLinks'>
            <div onClick={handleClick} className='dropdown'>

              <div className='dropbtn'>Artists ▼</div>
              <div className='dropdownContent'>

                {artists.map(r => (
                  <NavLink onClick={handleToggle} key={r.roomN} className={navData => navData.isActive ? 'active' : 'inactive'} to={'/rooms/' + r.slug}>
                    {r.name} ({r.roomN})
                  </NavLink>
                )
                )}

              </div>

            </div>
            <NavLink onClick={handleToggle} className={navData => navData.isActive ? 'active' : 'inactive'} to='/about'>.!?</NavLink>
          </div>
          <div className="toggleMenu">
            <CgMenu onClick={handleToggle} className='hamburgerToggle' size={28} />
            <CgClose onClick={handleToggle} className='closeToggle' size={28} />
          </div>
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
            <div className='dropdown'>

              <div onClick={handleClick} className='dropbtn'>Artists ▼</div>
              <div className='dropdownContent'>
                {artists.map(r => (
                  <NavLink onClick={handleToggle} key={r.roomN} className={navData => navData.isActive ? 'active' : 'inactive'} to={'/rooms/' + r.slug}>
                    {r.name} ({r.roomN})
                  </NavLink>
                )
                )}
              </div>
            </div>
            <NavLink onClick={handleToggle} className={navData => navData.isActive ? 'active' : 'inactive'} to='/about'>.!? </NavLink>
          </div>
          <div className="toggleMenu">
            <CgMenu onClick={handleToggle} className='hamburgerToggle' size={28} />
            <CgClose onClick={handleToggle} className='closeToggle' size={28} />
          </div>
        </nav>
      )}
    </header>
  )
};