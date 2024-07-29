import artist1 from './assets/images/artist-1.jpg';
import artist2 from './assets/images/artist-2.jpg';
import artist3 from './assets/images/artist-3.jpg';
import artist4 from './assets/images/artist-4.jpg';
import artist5 from './assets/images/artist-5.jpg';
import artist6 from './assets/images/artist-6.jpg';

const artistsData = [
  {
    name: "Royal Big Ben Orchestra",
    imgSrc: artist1,
    link: "/Artists/Profile",
    playlists: [
      {
        title: "Dreamy Future Sounds",
        imgSrc: "Playlist1"
      },
      {
        title: "Moonlight Symphony",
        imgSrc: "Playlist2"
      },
      {
        title: "Latin Jazz Fiesta",
        imgSrc: "Playlist3"
      }
    ]
  },
  {
    name: "Theo Parker",
    imgSrc: artist2,
    link: "Profile",
    playlists: []
  },
  {
    name: "Dahlia Cole",
    imgSrc: artist3,
    link: "Profile",
    playlists: []
  },
  {
    name: "Urban Jazz Syndicate",
    imgSrc: artist4,
    link: "Profile",
    playlists: []
  },
  {
    name: "Finnley Calloway",
    imgSrc: artist5,
    link: "Profile",
    playlists: []
  },
  {
    name: "Celeste Holiday",
    imgSrc: artist6,
    link: "Profile",
    playlists: []
  }
];

export default artistsData;