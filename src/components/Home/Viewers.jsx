import viewer1 from '../../assets/images/viewers-disney.png';
import viewer2 from '../../assets/images/viewers-pixar.png';
import viewer3 from '../../assets/images/viewers-marvel.png';
import viewer4 from '../../assets/images/viewers-starwars.png';
import viewer5 from '../../assets/images/viewers-national.png';

import video1 from '../../assets/videos/1564674844-disney.mp4';
import video2 from '../../assets/videos/1564676714-pixar.mp4';
import video3 from '../../assets/videos/1564676115-marvel.mp4';
import video4 from '../../assets/videos/1608229455-star-wars.mp4';
import video5 from '../../assets/videos/1564676296-national-geographic.mp4';
import { Container, Wrap } from './ViewersStyles';

const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src={viewer1} alt="viewer" />
        <video autoPlay playsInline loop>
          <source src={video1} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewer2} alt="viewer" />
        <video autoPlay playsInline loop>
          <source src={video2} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewer3} alt="viewer" />
        <video autoPlay playsInline loop>
          <source src={video3} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewer4} alt="viewer" />
        <video autoPlay playsInline loop>
          <source src={video4} type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src={viewer5} alt="viewer" />
        <video autoPlay playsInline loop>
          <source src={video5} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

export default Viewers;
