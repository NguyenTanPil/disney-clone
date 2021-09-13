import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 0 2.6rem;

  h4 {
    margin-bottom: 2rem;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
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
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
    inset: 0;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
  }
`;
