import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  letter-spacing: 1.5rem;
  padding: 0 3.6rem;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 3;
`;

export const Logo = styled(Link)`
  cursor: pointer;
  display: inline-block;
  margin-top: 0.4rem;
  max-height: 7rem;
  padding: 0;
  width: 8rem;

  img {
    display: block;
    width: 100%;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  justify-content: flex-end;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  position: relative;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1.2rem;

  img {
    height: 2rem;
    margin-bottom: 0.4rem;
    min-width: 2rem;
    width: 2rem;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 1.3rem;
    letter-spacing: 1.42px;
    padding: 2px 0;
    position: relative;
    text-transform: uppercase;

    &::before {
      content: '';
      background-color: rgb(249, 249, 249);
      border-radius: 0 0 0.4rem 0.4rem;
      height: 0.2rem;
      position: absolute;
      bottom: -0.6rem;
      left: 0;
      right: 0;
      transform: scaleX(0);
      transform-origin: right center;
      transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      width: auto;
    }
  }

  &:hover {
    span::before {
      transform: scaleX(1);
      transform-origin: left center;
    }
  }
`;

export const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  border-radius: 0.4rem;
  cursor: pointer;
  letter-spacing: 1.5px;
  padding: 0.8rem 1.6rem;
  text-transform: uppercase;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    border-color: transparent;
    color: #000;
  }
`;

export const UserImg = styled.img`
  height: 100%;
`;

export const DropDown = styled.div`
  background-color: rgb(19, 19, 10);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 0.4rem;
  box-shadow: 0 0 1.8rem 0 rgb(0 0 0 / 50%);
  font-size: 1.4rem;
  letter-spacing: 0.3rem;
  opacity: 0;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 100%;
  width: 10rem;
`;

export const SignOut = styled.div`
  cursor: pointer;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 4.8rem;

  ${UserImg} {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
