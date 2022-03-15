import React, { createContext } from "react";
export const ArtistContext = createContext();


export const ArtistProvider = props => {

const getRoomNumber = r => {
        const index = artists.findIndex(x => {return x.slug === r});
        return index;
}

const createSrc = (x, a='', b='', c='', d='', e='', f='', g='', h='') => {
    let y = [];

    if(a===''){
        for(let i=1; i<=x; i++){
            y.push( {title: i, suffix: '.jpg'} );
        }
    }
    else{
            for(let i=1; i<=x; i++){
                if(a.charAt(1)==='.' && a[0]===i.toString()){let s = a.slice(1);y.push({title: i, suffix: s})}
                else if(a.charAt(2)==='.' && `${a[0]}${a[1]}`===i.toString()){let s = a.slice(2);y.push({title: i, suffix: s})}
                else if(b.charAt(1)==='.' && b[0]===i.toString()){let s = b.slice(1); y.push({title: i, suffix: s})}
                else if(b.charAt(2)==='.' && `${b[0]}${b[1]}`===i.toString()){let s = b.slice(2); y.push({title: i, suffix: s})}
                else if(c.charAt(1)==='.' && c[0]===i.toString()){let s = c.slice(1); y.push({title: i, suffix: s})}
                else if(c.charAt(2)==='.' && `${c[0]}${c[1]}`===i.toString()){let s = c.slice(2); y.push({title: i, suffix: s})}
                else if(d.charAt(1)==='.' && d[0]===i.toString()){let s = d.slice(1); y.push({title: i, suffix: s})}
                else if(d.charAt(2)==='.' && `${d[0]}${d[1]}`===i.toString()){let s = d.slice(2); y.push({title: i, suffix: s})}
                else if(e.charAt(1)==='.' && e[0]===i.toString()){let s = e.slice(1); y.push({title: i, suffix: s})}
                else if(e.charAt(2)==='.' && `${e[0]}${e[1]}`===i.toString()){let s = e.slice(2); y.push({title: i, suffix: s})}
                else if(f.charAt(1)==='.' && f[0]===i.toString()){let s = f.slice(1); y.push({title: i, suffix: s})}
                else if(f.charAt(2)==='.' && `${f[0]}${f[1]}`===i.toString()){let s = f.slice(2); y.push({title: i, suffix: s})}
                else if(g.charAt(1)==='.' && g[0]===i.toString()){let s = g.slice(1); y.push({title: i, suffix: s})}
                else if(g.charAt(2)==='.' && `${g[0]}${g[1]}`===i.toString()){let s = g.slice(2); y.push({title: i, suffix: s})}
                else if(h.charAt(1)==='.' && h[0]===i.toString()){let s = h.slice(1); y.push({title: i, suffix: s})}
                else if(h.charAt(2)==='.' && `${h[0]}${h[1]}`===i.toString()){let s = h.slice(2); y.push({title: i, suffix: s})}
                else{y.push({title: i, suffix: '.jpg'})};
            }   
    }
    return y;
        };

const artists = [

    {   slug: '1-alina-marie',
        roomN: 1,
        name: 'Alina Marie',
        shortName: 'A. Marie',
        place: 'Berlin, Germany',
        art: {images: createSrc(18, '2.gif', '3.gif', '4.gif')},
    },
    {   slug: '2-bruno-kalthoff',
        roomN: 2,
        name: 'Bruno Kalthoff',
        shortName:'B. Kalthoff',
        place: 'Hamburg, Germany',
        art: {images: createSrc(20, '5.png', '15.png', '18.png')},
    },
    {   slug: '3-elisabeth-koeller',
        roomN: 3,
        name: 'Elisabeth Köller',
        shortName:'E. Köller',
        place: 'Berlin, Germany',
        art: {videos:["https://player.vimeo.com/video/388583877?portrait=0"]}
    },
    {   slug: '4-kurinai',
        roomN: 4,
        name: 'Stephanie Joyce "Kurinai" Lopera',
        shortName:'Kurinai',
        place: 'Antipolo City, Philippines',
        art: {images: createSrc(3)}
    },
    {   slug: '5-angelica-marie-dinglasa',
        roomN: 5,
        name: 'Angelica Marie Dinglasa',
        shortName:'A.M. Dinglasa',
        place: 'Manila, Philippines',
        art: {images: createSrc(14)}
    },
    {   slug: '6-angelyn-dinglasa',
        roomN: 6,
        name: 'Angelyn Dinglasa',
        shortName:'A. Dinglasa',
        place: 'Manila, Philippines',
        art: {images: createSrc(12)}
    },
    {   slug: '7-maxime-gutinbear',
        roomN: 7,
        name: 'Maxime GutinBear',
        shortName:'GutinBear',
        place: 'Paris, France',
        art: {audios: [
            {
              title: 'Asian Orgy',
              artist: 'Maxime GutinBear',
              audioSrc: '/img/artists/7-maxime-gutinbear/asian_orgy.mp3',
              image: '/img/artists/7-maxime-gutinbear/asian_orgy.jpg',
              color: 'linear-gradient(40deg, #009c6d 0%, rgba(200, 150, 170, 0.788) 50%, rgb(110, 110, 204) 100%)',
            },
            { 
              title: 'Baguette Break',
              artist: 'Maxime GutinBear',
              audioSrc: '/img/artists/7-maxime-gutinbear/baguette_break.mp3',
              image: '/img/artists/7-maxime-gutinbear/baguette_break.jpg',
              color: 'linear-gradient(40deg, rgba(55, 248, 255, 0.788) 0%, rgb(247, 22, 235) 100%)',
            },
            { 
              title: 'Island Life',
              artist: 'Maxime GutinBear',
              audioSrc: '/img/artists/7-maxime-gutinbear/island_life.m4a',
              image: '/img/artists/7-maxime-gutinbear/island_life.jpg',
              color: 'linear-gradient(40deg, rgba(220, 100, 255, 0.788) 0%, rgb(230, 233, 72) 100%)',
            },
            { 
              title: 'Happy Lonely',
              artist: 'Maxime GutinBear',
              audioSrc: '/img/artists/7-maxime-gutinbear/happy_lonely.mp3',
              image: '/img/artists/7-maxime-gutinbear/happy_lonely.png',
              color: 'linear-gradient(40deg, rgba(100, 152, 231, 0.788) 0%, rgb(174, 72, 233) 100%)',
            }
          ]}
    },
    {   slug: '8-gina-alferez',
        roomN: 8,
        name: 'Gina Alferez',
        shortName:'G. Alferez',
        place: 'Cebu, Philippines',
        art: {images: createSrc(9, '2.png', '3.png', '4.png', '5.png', '8.png', '9.png')}
    },
    {   slug: '9-michael-tezak',
        roomN: 9,
        name: 'Michael Tezak',
        shortName:'M. Tezak',
        place: 'Berlin, Germany',
        art: {audios:[
            {
              title: 'Beaches Of The Philippines',
              artist: 'Michael Tezak',
              audioSrc: '/img/artists/9-michael-tezak/beaches.m4a',
              image: '/img/artists/9-michael-tezak/beaches.jpg',
              color: 'linear-gradient(40deg, #009c6d 0%, rgba(200, 150, 170, 0.788) 50%, rgb(110, 110, 204) 100%)',
            }]
        }
    },
    {   slug: '10-carlo-alivo',
        roomN: 10,
        name: 'Carlo Alivo',
        shortName:'C. Alivo',
        place: 'Cebu, Philippines',
        art: {images: createSrc(10)}
    },
    {   slug: '11-sophie-sarcander',
        roomN: 11,
        name: 'Sophie Sarcander',
        shortName:'S. Sarcander',
        place: 'Berlin, Germany',
        art: {images: createSrc(15)}
},
{   slug: '12-nadine-o-gerali',
        roomN: 12,
        name: 'Nadine O. Gerali',
        shortName:'N.O. Gerali',
        place: 'Cebu, Philippines',
        art: {images: createSrc(3)}
},
{   slug: '13-sofia-nicole-de-leon',
        roomN: 13,
        name: 'Sofia Nicole De Leon',
        shortName:'S.N.D. Leon',
        place: 'Bacolod City, Philippines',
        art: {images: createSrc(1, '1.png')}
},
{   slug: '14-ahl-james-mangulare',
        roomN: 14,
        name: 'Ahl James Mangulare',
        shortName:'A.J. Mangulare',
        place: 'Cebu, Philippines',
        art: {images: createSrc(4)}
},
{   slug: '15-joemar-retardo',
        roomN: 15,
        name: 'Joemar Retardo',
        shortName:'J. Retardo',
        place: 'Cebu, Philippines',
        art: {images: createSrc(13)}
},
{   slug: '16-filtercha',
        roomN: 16,
        name: 'FILTERCHA',
        shortName:'FILTERCHA',
        place: 'Cebu, Philippines',
        art: {images: createSrc(2)}
},
{   slug: '17-orazio.libre',
        roomN: 17,
        name: 'Orazio.Libre',
        shortName:'O.Libre',
        place: 'Solothurn, Switzerland',
        art: {images: createSrc(11)}
},
{   slug: '18-samantha-enopia',
        roomN: 18,
        name: 'Samantha Enopia',
        shortName:'S. Enopia',
        place: 'Cebu, Philippines',
        art: {images: createSrc(2, '1.png', '2.png')}
},
{   slug: '19-jesus-donoso',
        roomN: 19,
        name: 'Jesus Donoso',
        shortName:'J. Donoso',
        place: 'Madrid, Spain',
        art: {images: createSrc(5)}
},
    

];


return (
<ArtistContext.Provider value={[artists, getRoomNumber]}>
    {props.children}
</ArtistContext.Provider>
);
}