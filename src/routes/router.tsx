// src/router.tsx
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/layout';
import ArtistProfile from '../pages/auth/Profile/ArtistProfile';
import CartProfile from '../pages/auth/Profile/CartProfile';
import EditProfile from '../pages/auth/Profile/EditProfile';
import YourProfiles from '../pages/auth/Profile/YourProfiles'
import CartCheckout from '../pages/auth/Profile/CartCheckout';
import EmptyCart from '../pages/auth/Profile/EmptyCart';
import CreateArtistProfile from '../pages/auth/Profile/CreateArtistProfile'
import YourProfileOne from '../pages/auth/Profile/YoursProfileOne'
import EditArtistProfileTwo from '../pages/auth/Profile/EditArtistProfileTwo'
import PlaylistProfileFirst from '../pages/auth/Profile/PlaylistProfileFirst'
import ArtistTrack from  '../pages/auth/Profile/ArtistTrack'
import UploadTrackprofile from '../pages/auth/Profile/UploadTrackProfile'
import UploadTrackIcon from '../pages/auth/Profile/UploadtrackIcon'
import ArtistProfileHome from '../pages/auth/Profile/ArtistProfileHome'
import ArtistProfileplaylist from '../pages/auth/Profile/ArtistProfileplaylist'
import ArtistPlaylistSecondpage from '../pages/auth/Profile/ArtistPlaylistSecondpage'
import ArtistPlaylistIcon from  '../pages/auth/Profile/ArtistPlaylistIcon'
import Earnings from '../pages/auth/Profile/Earnings'
import AccountSettings from '../pages/auth/Profile/AccountSettings'
import BritSchoolProfile  from '../pages/auth/Profile/BritSchoolProfile'
import BritSchoolHeader from '../pages/auth/Profile/BritSchoolHeader'
import BritSchoolArtist from '../pages/auth/Profile/BritSchoolArtist'
import BritProfleSecond from '../pages/auth/Profile/BritProfileSecond'
import BritschoolArtistProfile from '../pages/auth/Profile/BriitschoolArtistProfile'
import BritschoolReleaseProfile from '../pages/auth/Profile/BritschoolReleaseProfile';
import BritschoolPlaylistProfile from '../pages/auth/Profile/BritschoolPlaylistProfile'
import BritschoolEarningtProfile from '../pages/auth/Profile/BritschoolEarningProfile'
import TheBritSchoolHeader from '../pages/auth/Profile/TheBritSchool';
import TheBritSchoolinnerProfile from '../pages/auth/Profile/TheBritSchoolinnerProfile';



const Playlist = lazy(() => import('../pages/auth/ArtistPage'));
const Release = lazy(() => import('../pages/auth/ReleasesPage'));
const Playlists = lazy(()=> import('../pages/auth/PlaylistPage'))
const Home = lazy(() => import('../pages/auth/Home'));
const SigninPage = lazy(() => import('../pages/un_auth/SignInPage'));
const CreateAnAccount = lazy (() =>import('../pages/un_auth/CreateAnAccount'));
const ResetYourPassword = lazy (() => import ('../pages/un_auth/ResetYourPassword'));
const ResetPasswordConfirmation = lazy (() => import ('../pages/un_auth/ResetPasswordConfirmation'));
const TrackProfile = lazy (() => import ('../pages/auth/Profile/TrackProfile'));
const ManageProfiles = lazy (() => import ('../pages/auth/Profile/ManageProfiles'));


// 

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Artists',
        children: [
          {
            index: true,
            element: <Playlist />,
          },
          {
            path:'/Artists/Profile',
            element:<ArtistProfile />
          },
  
        ],
      },
      {
        path:'Releases',
        element:<Release />
      },
      {
        path:'Playlists',
        element:<Playlists />
      },
      {
        path: 'signin',
        element: <SigninPage />
      },
      {
        path : 'signup',
        element : <CreateAnAccount/>
      },
   
      {
        path :'resetyourpassword',
        element : <ResetYourPassword/>
      },
      {
        path :'resetPasswordConfirmation',
        element : <ResetPasswordConfirmation/>
      },
      {
        path : 'trackprofile',
        element : <TrackProfile/>
      },
      {
        path : 'manage-profiles',
        element : <ManageProfiles/>
      },
      {
        path : 'cartprofile',
        element :<CartProfile/>
      },
      {
        path : 'editprofile',
        element : <EditProfile/>
      },
      {
        path : 'yourprofiles',
        element : <YourProfiles/>
      },
      {
        path : 'cartcheckout',
        element : <CartCheckout/>
      },
      {
        path : 'emptycart',
        element : <EmptyCart/>
      },
      {
        path : 'createartistprofile',
        element : <CreateArtistProfile/>
      },
      {
        path : 'yourprofileone',
        element : <YourProfileOne/>
      },
      {
        path : 'editartistprofiletwo',
        element : <EditArtistProfileTwo/>
      },
      {
        path : 'playlistprofilefirst',
        element : <PlaylistProfileFirst/>
      },
      {
        path : 'artisttrack',
        element : <ArtistTrack/>
      },
      {
        path : 'uploadtrackprofile',
        element : <UploadTrackprofile/>
      },
      {
        path : 'uploadtrackicon',
        element : <UploadTrackIcon/>
      },
      {
        path : 'artistprofilehome',
        element : <ArtistProfileHome/>
      },
      {
        path : 'artistprofileplaylist',
        element : <ArtistProfileplaylist/>
      },
      {
        path : 'artistplaylistsecondpage',
        element : <ArtistPlaylistSecondpage/>
      },
      {
        path : 'artistplaylisticon',
        element : <ArtistPlaylistIcon/>
      },
      {
        path : 'earnings',
        element : <Earnings/>
      },
      {
        path :  'accountsettings',
        element :<AccountSettings/>
      },
      {
        path : 'britschoolprofile',
        element : <BritSchoolProfile/>
      },
      {
        path : 'britschoolheader',
        element : <BritSchoolHeader/>
      },
      {
        path : 'britschoolartist',
        element : <BritSchoolArtist/>
      },
      {
        path : 'britprofilesecond',
        element : <BritProfleSecond/>
      },
      {
        path : 'britschoolartistprofile',
        element : <BritschoolArtistProfile/>
      },
      {
        path : 'britschoolreleaseprofile',
        element : <BritschoolReleaseProfile/>
      },
      {
        path : 'britschoolplaylistprofile',
        element : <BritschoolPlaylistProfile/>
      },
      {
        path : 'britschoolearningprofile',
        element : <BritschoolEarningtProfile/>
      },
      {
        path : 'thebritschoolheader',
        element : <TheBritSchoolHeader/>
      },
      {
        path : 'thebritschoolinnerprofile',
        element : <TheBritSchoolinnerProfile/>
      }
      
      
      
 
      
    ],
  },
]);

export default AppRouter;


