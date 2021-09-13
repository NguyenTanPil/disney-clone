import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

import badging from '../../assets/images/slider-badging.jpg';
import scale from '../../assets/images/slider-scale.jpg';
import badag from '../../assets/images/slider-badag.jpg';
import scales from '../../assets/images/slider-scales.jpg';

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: 'ondemand',
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="#!">
          <img src={badging} alt="img1" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#!">
          <img src={scale} alt="img2" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#!">
          <img src={badag} alt="img3" />
        </a>
      </Wrap>
      <Wrap>
        <a href="#!">
          <img src={scales} alt="img4" />
        </a>
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;

const Carousel = styled(Slider)`
  margin-top: 2rem;

  & > button {
    height: 100%;
    opacity: 0;
    width: calc(5vw / 62.5 * 100);
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  & li button {
    &::before {
      color: rgb(150, 150, 171);
      font-size: 1rem;
    }
  }

  li.slick-active button::before {
    color: #fff;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -7.5rem;
  }

  .slick-next {
    right: -7.5rem;
  }
`;

const Wrap = styled.div`
  border: 0.4rem solid transparent;
  border-radius: 0.4rem;
  cursor: pointer;
  position: relative;
  transition-duration: 300ms;

  a {
    border-radius: 0.4rem;
    box-shadow: 0 2.6rem 3rem -1rem rgb(0 0 0 / 69%),
      rgb(0 0 0 73%) 0 1.6rem 1rem -1rem;
    display: block;
    position: relative;
  }

  img {
    border-radius: 0.4rem;
    display: block;
    height: 100%;
    width: 100%;
  }

  &:hover {
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
