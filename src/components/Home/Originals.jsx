import { NavLink } from 'react-router-dom';
import { Container, Content, Wrap } from './ListStyles';
import { useSelector } from 'react-redux';
import { selectOriginals } from '../../features/movie/movieSlice';

const Originals = () => {
  const movies = useSelector(selectOriginals);

  return (
    <Container>
      <h4>Originals</h4>
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

export default Originals;
