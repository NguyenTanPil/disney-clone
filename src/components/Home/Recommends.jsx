import { NavLink } from 'react-router-dom';
import { Container, Content, Wrap } from './ListStyles';
import { useSelector } from 'react-redux';
import { selectRecommends } from '../../features/movie/movieSlice';

const Recommends = () => {
  const movies = useSelector(selectRecommends);

  return (
    <Container>
      <h4>Recommended for you</h4>
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

export default Recommends;
