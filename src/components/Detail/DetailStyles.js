import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  min-height: calc(100vh - 25rem);
  overflow: hidden;
  padding: 0 calc(3.5vw * 100 / 62.5 - 5px);
  position: relative;
  top: 7.2rem;
`;

export const Background = styled.div`
  opacity: 0.8;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    height: 100vh;
    object-fit: cover;
    width: 100%;

    @media screen and (max-width: 768px) {
      width: initial;
    }
  }
`;

export const ImgTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: calc(30vw * 100 / 62.5);
  margin: 0 auto;
  min-height: 17rem;
  padding-bottom: 2.4rem;
  width: 100%;

  img {
    max-width: 60rem;
    min-height: 20rem;
    width: calc(35vw * 100 / 62.5);
  }
`;

export const ContentMeta = styled.div`
  max-width: 87.4rem;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 2.4rem 0;
  min-height: 5.6rem;
`;

export const Player = styled.button`
  background-color: rgb(249, 249, 249);
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  height: 5.6rem;
  letter-spacing: 0.18rem;
  margin: 0 2.2rem 0 0;
  padding: 0 2.4rem;
  transition: all 0.2s ease;
  text-align: center;
  text-transform: uppercase;

  img {
    width: 3.2rem;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
  }

  @media screen and (max-width: 768px) {
    height: 4.5rem;
    font-size: 1.2rem;
    margin-right: 1rem;
    padding: 0 1.2rem;

    img {
      width: 2.5rem;
    }
  }
`;

export const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(249, 249, 249);
  color: rgb(249, 249, 249);
`;

export const AddList = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border: 0.2rem solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.4rem;
  margin-right: 1.6rem;
  width: 4.4rem;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      height: 0.2rem;
      transform: translate(0.1rem, 0) rotate(0deg);
      width: 1.6rem;
    }

    &:nth-child(2) {
      height: 1.6rem;
      transform: translateX(-0.8rem) rotate(0deg);
      width: 0.2rem;
    }
  }
`;

export const GroupWatch = styled.div`
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.4rem;
  width: 4.4rem;

  div {
    background-color: #000;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;

    img {
      width: 100%;
    }
  }
`;

export const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 1.5rem;
  min-height: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 2rem;
  line-height: 1.4;
  padding: 1.6rem 0;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
