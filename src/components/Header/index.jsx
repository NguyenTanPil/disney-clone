import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, provider } from '../../firebase-app';

import homeIcon from '../../assets/images/home-icon.svg';
import logo from '../../assets/images/logo.svg';
import movieIcon from '../../assets/images/movie-icon.svg';
import originalsIcon from '../../assets/images/original-icon.svg';
import searchIcon from '../../assets/images/search-icon.svg';
import seriesIcon from '../../assets/images/series-icon.svg';
import watchListIcon from '../../assets/images/watchlist-icon.svg';
import {
  DropDown,
  Login,
  Logo,
  Nav,
  NavLink,
  NavMenu,
  SignOut,
  UserImg,
} from './HeaderStyles';
import {
  selectUser,
  setUserLoginDetial,
  setSignOutState,
} from '../../features/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name: userName, photo: userPhoto } = useSelector(selectUser);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          history.push('/');
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const setUser = useCallback(
    (user) => {
      dispatch(
        setUserLoginDetial({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    // If logined => current url is /home and setUser
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        history.push('/home');
      }
    });
  }, [userName, history, setUser]);

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <NavLink to="/home">
              <img src={homeIcon} alt="home" />
              <span>home</span>
            </NavLink>
            <NavLink to="/search">
              <img src={searchIcon} alt="search" />
              <span>search</span>
            </NavLink>
            <NavLink to="/watchlist">
              <img src={watchListIcon} alt="watchlist" />
              <span>watchlist</span>
            </NavLink>
            <NavLink to="/originals">
              <img src={originalsIcon} alt="originals" />
              <span>originals</span>
            </NavLink>
            <NavLink to="/movie">
              <img src={movieIcon} alt="movie" />
              <span>movie</span>
            </NavLink>
            <NavLink to="/series">
              <img src={seriesIcon} alt="series" />
              <span>series</span>
            </NavLink>
          </NavMenu>

          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;
