import { Container } from './HomeStyles';
import { useEffect } from 'react';

import ImgSlider from './ImgSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';
import db from '../../firebase-app';
import { setMovie } from '../../features/movie/movieSlice';
import { selectUser } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { collection, query, getDocs } from 'firebase/firestore';

const Home = () => {
  const dispatch = useDispatch();
  const { user: userName } = useSelector(selectUser);

  useEffect(() => {
    const getMovies = async () => {
      const q = query(collection(db, 'movies'));
      const movies = await getDocs(q);

      const recommends = [];
      const newDisneys = [];
      const originals = [];
      const trending = [];
      movies.forEach((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommends.push({ id: doc.id, ...doc.data() });
            break;

          case 'new':
            newDisneys.push({ id: doc.id, ...doc.data() });
            break;

          case 'original':
            originals.push({ id: doc.id, ...doc.data() });
            break;

          case 'trending':
            trending.push({ id: doc.id, ...doc.data() });
            break;

          default:
            break;
        }
      });

      dispatch(
        setMovie({
          recommends,
          newDisneys,
          originals,
          trending,
        }),
      );
    };

    getMovies();
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;
