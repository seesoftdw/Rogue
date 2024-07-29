import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Authorized from '../components/Authorized';
import Unauthorized from '../components/Unauthorized';
import NewPassword from '../pages/signin/NewPassword';
import PasswordResetSuccess from '../pages/signin/PasswordResetSuccess';
import ArtistProfile from "../pages/auth/Artist/ArtistProfile";
import CartProfile from "../pages/auth/Payment/CartProfile";
import EditProfile from "../pages/auth/Profile/EditProfile";
import YourProfiles from "../pages/auth/Profile/YourProfiles";
import CartCheckout from "../pages/auth/Payment/CartCheckout";
import EmptyCart from "../pages/auth/Payment/EmptyCart";
import CreateArtistProfile from "../pages/auth/Profile/CreateArtistProfile";
import YourProfileOne from "../pages/auth/Profile/YoursProfileOne";
import EditArtistProfileTwo from "../pages/auth/Profile/EditArtistProfileTwo";
import PlaylistProfileFirst from "../pages/auth/Profile/PlaylistProfileFirst";
import ArtistTrack from "../pages/auth/Artist/ArtistTrack";
import UploadTrackprofile from "../pages/auth/Artist/UploadTrack/UploadTrack";
import UploadTrackIcon from "../pages/auth/Artist/Tracks/UploadtrackIcon";
import ArtistProfileHome from "../pages/auth/Artist/ArtistProfileHome";
import ArtistProfileplaylist from "../pages/auth/Artist/ArtistProfileplaylist";
import ArtistPlaylistSecondpage from "../pages/auth/Artist/ArtistPlaylistSecondpage";
import ArtistPlaylistIcon from "../pages/auth/Artist/ArtistPlaylistIcon";
import Earnings from "../pages/auth/Profile/Earnings";
import AccountSettings from "../pages/auth/Profile/AccountSettings";
import BritSchoolProfile from "../pages/auth/BritSchool/BritSchoolProfile";
import BritSchoolHeader from "../pages/auth/BritSchool/BritSchoolHeader";
import BritSchoolArtist from "../pages/auth/BritSchool/BritSchoolArtist";
import BritProfleSecond from "../pages/auth/BritSchool/BritProfileSecond";
import BritschoolArtistProfile from "../pages/auth/BritSchool/BriitschoolArtistProfile";
import BritschoolReleaseProfile from "../pages/auth/BritSchool/BritschoolReleaseProfile";
import BritschoolPlaylistProfile from "../pages/auth/BritSchool/BritschoolPlaylistProfile";
import BritschoolEarningtProfile from "../pages/auth/BritSchool/BritschoolEarningProfile";
import TheBritSchoolHeader from "../pages/auth/BritSchool/TheBritSchool";
import TheBritSchoolinnerProfile from "../pages/auth/BritSchool/TheBritSchoolinnerProfile";

const Playlist = lazy(() => import('../pages/auth/ArtistPage'));
const Release = lazy(() => import('../pages/auth/ReleasesPage'));
const Playlists = lazy(() => import('../pages/auth/PlaylistPage'));
const Home = lazy(() => import('../pages/auth/Home'));
const SigninPage = lazy(() => import('../pages/signin/SignInPage'));
const CreateAnAccount = lazy(() => import('../pages/signin/CreateAnAccount'));
const ResetYourPassword = lazy(() => import('../pages/signin/ResetYourPassword'));
const ResetPasswordConfirmation = lazy(() => import('../pages/signin/ResetPasswordConfirmation'));
const TrackProfile = lazy(() => import('../pages/auth/Track/TrackProfile'));
const ManageProfiles = lazy(() => import('../pages/auth/Profile/ManageProfiles'));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Artists",
        children: [
          {
            index: true,
            element: <Playlist />,
          },
          {
            path: "/Artists/Profile",
            element: (
              <Authorized>
                <ArtistProfile />
              </Authorized>
            ),
          },
        ],
      },
      {
        path: "Releases",
        element: (
          <Authorized>
            <Release />
          </Authorized>
        ),
      },
      {
        path: "Playlists",
        element: (
          <Authorized>
            <Playlists />
          </Authorized>
        ),
      },
      {
        path: "signin",
        element: (
          <Unauthorized>
            <SigninPage />
          </Unauthorized>
        ),
      },
      {
        path: "signup",
        element: (
          <Unauthorized>
            <CreateAnAccount />
          </Unauthorized>
        ),
      },
      {
        path: "resetyourpassword",
        element: (
          <Unauthorized>
            <ResetYourPassword />
          </Unauthorized>
        ),
      },
      {
        path: "resetPasswordConfirmation",
        element: (
          <Unauthorized>
            <ResetPasswordConfirmation />
          </Unauthorized>
        ),
      },
      {
        path: "trackprofile",
        element: (
          <Authorized>
            <TrackProfile />
          </Authorized>
        ),
      },
      {
        path: "manage-profiles",
        element: (
          <Authorized>
            <ManageProfiles />
          </Authorized>
        ),
      },
      {
        path: "cartprofile",
        element: (
          <Authorized>
            <CartProfile />
          </Authorized>
        ),
      },
      {
        path: "editprofile",
        element: (
          <Authorized>
            <EditProfile />
          </Authorized>
        ),
      },
      {
        path: "yourprofiles",
        element: (
          <Authorized>
            <YourProfiles />
          </Authorized>
        ),
      },
      {
        path: "cartcheckout",
        element: (
          <Authorized>
            <CartCheckout />
          </Authorized>
        ),
      },
      {
        path: "emptycart",
        element: (
          <Authorized>
            <EmptyCart />
          </Authorized>
        ),
      },
      {
        path: "createartistprofile",
        element: (
          <Authorized>
            <CreateArtistProfile />
          </Authorized>
        ),
      },
      {
        path: "yourprofileone",
        element: (
          <Authorized>
            <YourProfileOne />
          </Authorized>
        ),
      },
      {
        path: "editartistprofiletwo",
        element: (
          <Authorized>
            <EditArtistProfileTwo />
          </Authorized>
        ),
      },
      {
        path: "playlistprofilefirst",
        element: (
          <Authorized>
            <PlaylistProfileFirst />
          </Authorized>
        ),
      },
      {
        path: "uploadtrack",
        element: (
          <Authorized>
            <UploadTrackprofile />
          </Authorized>
        ),
      },
      {
        path: "artisttrack",
        element: (
          <Authorized>
            <ArtistTrack />
          </Authorized>
        ),
      },
      {
        path: "uploadtrackprofile",
        element: (
          <Authorized>
            <UploadTrackprofile />
          </Authorized>
        ),
      },
      {
        path: "uploadtrackicon",
        element: (
          <Authorized>
            <UploadTrackIcon />
          </Authorized>
        ),
      },
      {
        path: "artistprofilehome",
        element: (
          <Authorized>
            <ArtistProfileHome />
          </Authorized>
        ),
      },
      {
        path: "artistprofileplaylist",
        element: (
          <Authorized>
            <ArtistProfileplaylist />
          </Authorized>
        ),
      },
      {
        path: "artistplaylistsecondpage",
        element: (
          <Authorized>
            <ArtistPlaylistSecondpage />
          </Authorized>
        ),
      },
      {
        path: "artistplaylisticon",
        element: (
          <Authorized>
            <ArtistPlaylistIcon />
          </Authorized>
        ),
      },
      {
        path: "earnings",
        element: (
          <Authorized>
            <Earnings />
          </Authorized>
        ),
      },
      {
        path: "accountsettings",
        element: (
          <Authorized>
            <AccountSettings />
          </Authorized>
        ),
      },
      {
        path: "britschoolprofile",
        element: (
          <Authorized>
            <BritSchoolProfile />
          </Authorized>
        ),
      },
      {
        path: "britschoolheader",
        element: (
          <Authorized>
            <BritSchoolHeader />
          </Authorized>
        ),
      },
      {
        path: "britschoolartist",
        element: (
          <Authorized>
            <BritSchoolArtist />
          </Authorized>
        ),
      },
      {
        path: "britprofilesecond",
        element: (
          <Authorized>
            <BritProfleSecond />
          </Authorized>
        ),
      },
      {
        path: "britschoolartistprofile",
        element: (
          <Authorized>
            <BritschoolArtistProfile />
          </Authorized>
        ),
      },
      {
        path: "britschoolreleaseprofile",
        element: (
          <Authorized>
            <BritschoolReleaseProfile />
          </Authorized>
        ),
      },
      {
        path: "britschoolplaylistprofile",
        element: (
          <Authorized>
            <BritschoolPlaylistProfile />
          </Authorized>
        ),
      },
      {
        path: "britschoolearningprofile",
        element: (
          <Authorized>
            <BritschoolEarningtProfile />
          </Authorized>
        ),
      },
      {
        path: "thebritschoolheader",
        element: (
          <Authorized>
            <TheBritSchoolHeader />
          </Authorized>
        ),
      },
      {
        path: "thebritschoolinnerprofile",
        element: (
          <Authorized>
            <TheBritSchoolinnerProfile />
          </Authorized>
        ),
      },
      {
        path: 'newpassword',
        element: <Unauthorized><NewPassword /></Unauthorized>,
      },
      {
        path: 'password-reset-success',
        element: <Unauthorized><PasswordResetSuccess /></Unauthorized>,
      },
    ],
  },
]);

export default AppRouter;
