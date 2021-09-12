import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase-app';
import homeIcon from '../../images/home-icon.svg';
import logo from '../../images/logo.svg';
import movieIcon from '../../images/movie-icon.svg';
import originalsIcon from '../../images/original-icon.svg';
import searchIcon from '../../images/search-icon.svg';
import seriesIcon from '../../images/series-icon.svg';
import watchListIcon from '../../images/watchlist-icon.svg';
import { Login, Logo, Nav, NavLink, NavMenu, UserImg } from './HeaderStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectUser, setUserLoginDetial } from '../../features/user/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    name: userName,
    email: userEmail,
    photo: userPhoto,
  } = useSelector(selectUser);

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetial({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }),
    );
  };

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

          <UserImg src={userPhoto} alt={userName} />
        </>
      )}
    </Nav>
  );
};

export default Header;
