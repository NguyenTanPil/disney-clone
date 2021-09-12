import { Login, Logo, Nav, NavLink, NavMenu } from './HeaderStyles';
import logo from '../../images/logo.svg';
import homeIcon from '../../images/home-icon.svg';
import searchIcon from '../../images/search-icon.svg';
import watchListIcon from '../../images/watchlist-icon.svg';
import originalsIcon from '../../images/original-icon.svg';
import movieIcon from '../../images/movie-icon.svg';
import seriesIcon from '../../images/series-icon.svg';

const Header = () => {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
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
      <Login>Login</Login>
    </Nav>
  );
};

export default Header;
