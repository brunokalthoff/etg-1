import React from 'react';
import { ArtistProvider } from './ArtistContext';
import { Routes, Route } from "react-router-dom";
import Start from './components/Start';
import About from './components/About';
import Rooms from './components/Rooms';
import Room from './components/Room';
import Redirect from './components/Redirect';
import ScrollToTop from './components/ScrollToTop';

export default function App () {
 
return (
  <ArtistProvider>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/about' element={<About />} />
      <Route path='/rooms' element={<Redirect />} />
      <Route path='/rooms/all' element={<Rooms />} />
      <Route path='/rooms/:room' element={<Room />} />
    </Routes>
  </ArtistProvider>
  );
};