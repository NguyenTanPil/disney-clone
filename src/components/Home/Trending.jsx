import { NavLink } from 'react-router-dom';
import { Container, Content, Wrap } from './ListStyles';
import { useSelector } from 'react-redux';
import { selectTrending } from '../../features/movie/movieSlice';

const Trending = () => {
  const movies = useSelector(selectTrending);

  return (
    <Container>
      <h4>Trending</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => {
            const { id, cardImg, title } = movie;

            return (
              <Wrap key={key}>
                <NavLink to={`/detail/${id}`}>
                  <img src={cardImg} alt={title} />
                </NavLink>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
};

export default Trending;
