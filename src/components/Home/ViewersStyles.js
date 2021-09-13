import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  gap: 2.5rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 3rem;
  padding: 3rem 0 2.6rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const Wrap = styled.div`
  border: 0.3rem solid rgba(249, 249, 249, 0.1);
  border-radius: 1rem;
  box-shadow: 0 2.6rem 3rem -1rem rgb(0 0 0 / 69%),
    rgb(0 0 0 73%) 0 1.6rem 1rem -1rem;
  cursor: pointer;
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.96) 0s;

  img {
    display: block;
    inset: 0;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    top: 0;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }

  video {
    background-size: cover;
    height: auto;
    min-height: 100%;
    min-width: 100%;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: 0;
    width: auto;
    z-index: 0;
  }

  &:hover {
    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.05);

    video {
      opacity: 1;
    }
  }
`;
