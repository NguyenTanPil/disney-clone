import styled from 'styled-components';
import backgroundHome from '../../assets/images/home-background.png';

export const Container = styled.main`
  display: block;
  min-height: calc(100vh - 25rem);
  overflow-x: hidden;
  padding: 0 calc(3.5vw - 0.5rem);
  position: relative;
  top: 7.2rem;

  &::after {
    background: url(${backgroundHome}) center center / cover no-repeat fixed;
    content: '';
    inset: 0;
    opacity: 1;
    position: absolute;
    z-index: -1;
  }
`;
