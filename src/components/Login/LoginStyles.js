import styled from 'styled-components';
import bg from '../../assets/images/login-background.jpg';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  text-align: center;
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-bottom: calc(10vw / 62.5 * 100);
  min-height: 100vh;
  padding: 8rem 4rem;
  width: 100%;
`;

export const BgImage = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
`;

export const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  margin: 0 auto calc(2vw / 62.5 * 100);
  max-width: 65rem;
  text-align: center;
  transition: opacity 0.2s ease-out;
  width: 100%;
`;

export const CTALogoOne = styled.img`
  display: block;
  margin-bottom: 1.2rem;
  max-width: 60rem;
  min-height: 1px;
  width: 100%;
`;

export const SignUp = styled.a`
  background-color: #0063e5;
  border: 1px solid transparent;
  color: #f9f9f9;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  margin-bottom: 1.4rem;
  padding: 1.65rem 0;
  transition: all 0.2s linear;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: #0483ee;
  }
`;

export const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 1.1rem;
  letter-spacing: 1.5px;
  line-height: 1.5;
  margin: 0 0 2.4rem;
  text-transform: capitalize;
`;

export const CTALogoTwo = styled.img`
  max-width: 60rem;
  margin-bottom: 2rem;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
