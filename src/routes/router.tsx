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
import Authorized from '../components/Authorized';


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
        element: <Authorized><Home /></Authorized>,
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
        element:<Authorized><Release /></Authorized>
      },
      {
        path:'Playlists',
        element:<Authorized><Playlists /></Authorized>
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
        element : <Authorized><ManageProfiles/></Authorized>
      },
      {
        path : 'cartprofile',
        element :<Authorized><CartProfile/></Authorized>
      },
      {
        path : 'editprofile',
        element : <Authorized><EditProfile/></Authorized>
      },
      {
        path : 'yourprofiles',
        element : <Authorized><YourProfiles/></Authorized>
      },
      {
        path : 'cartcheckout',
        element : <Authorized><CartCheckout/></Authorized>
      },
      {
        path : 'emptycart',
        element : <Authorized><EmptyCart/></Authorized>
      },
      {
        path : 'createartistprofile',
        element : <Authorized><CreateArtistProfile/></Authorized>
      },
      {
        path : 'yourprofileone',
        element : <Authorized><YourProfileOne/></Authorized>
      },
      {
        path : 'editartistprofiletwo',
        element : <Authorized><EditArtistProfileTwo/></Authorized>
      },
      {
        path : 'playlistprofilefirst',
        element : <Authorized><PlaylistProfileFirst/></Authorized>
      },
      {
        path : 'artisttrack',
        element : <Authorized><ArtistTrack/></Authorized>
      },
      {
        path : 'uploadtrackprofile',
        element : <Authorized><UploadTrackprofile/></Authorized>
      },
      {
        path : 'uploadtrackicon',
        element : <Authorized><UploadTrackIcon/></Authorized>
      },
      {
        path : 'artistprofilehome',
        element : <Authorized><ArtistProfileHome/></Authorized>
      },
      {
        path : 'artistprofileplaylist',
        element : <Authorized><ArtistProfileplaylist/></Authorized>
      },
      {
        path : 'artistplaylistsecondpage',
        element : <Authorized><ArtistPlaylistSecondpage/></Authorized>
      },
      {
        path : 'artistplaylisticon',
        element : <Authorized><ArtistPlaylistIcon/></Authorized>
      },
      {
        path : 'earnings',
        element : <Authorized><Earnings/></Authorized>
      },
      {
        path :  'accountsettings',
        element :<Authorized><AccountSettings/></Authorized>
      },
      {
        path : 'britschoolprofile',
        element : <Authorized><BritSchoolProfile/></Authorized>
      },
      {
        path : 'britschoolheader',
        element : <Authorized><BritSchoolHeader/></Authorized>
      },
      {
        path : 'britschoolartist',
        element : <Authorized><BritSchoolArtist/></Authorized>
      },
      {
        path : 'britprofilesecond',
        element : <Authorized><BritProfleSecond/></Authorized>
      },
      {
        path : 'britschoolartistprofile',
        element : <Authorized><BritschoolArtistProfile/></Authorized>
      },
      {
        path : 'britschoolreleaseprofile',
        element : <Authorized><BritschoolReleaseProfile/></Authorized>
      },
      {
        path : 'britschoolplaylistprofile',
        element : <Authorized><BritschoolPlaylistProfile/></Authorized>
      },
      {
        path : 'britschoolearningprofile',
        element : <Authorized><BritschoolEarningtProfile/></Authorized>
      },
      {
        path : 'thebritschoolheader',
        element : <Authorized><TheBritSchoolHeader/></Authorized>
      },
      {
        path : 'thebritschoolinnerprofile',
        element : <Authorized><TheBritSchoolinnerProfile/></Authorized>
      }  
    ],
  },
]);

export default AppRouter;


