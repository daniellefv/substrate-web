import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink, Button } from 'components';
import Image from 'next/image';
import baseTheme from 'styles/theme';
import { logo } from 'assets/images';
import { useRouter } from 'next/router';

export const NavBarStyle = css`
  z-index: 999;
  position: fixed;
  width: 100vw;
  top: 0;
  display: flex;
  justify-content: space-around;
  height: 70px;
  align-items: center;
  background-color: ${baseTheme.color_secondary};
  box-shadow: ${baseTheme.shadow_primary};

  ul {
    position: relative;
    top: 0;
    padding: 0;
    display: flex;
    width: 600px;
    justify-content: space-around;
    list-style: none;
  }

  div:nth-of-type(2) {
    display: none;
    transition: all 0.4s ease-out;
    div {
      width: 25px;
      height: 2px;
      background-image: ${baseTheme.color_bg_gradient};
      margin: 5px;
      transition: all 0.4s ease-out;
    }

    &.close {
      div {
        &:nth-child(1) {
          transform: rotate(45deg) translate(4px, 6px);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(4px, -6px);
        }
      }
    }
  }

  @media (max-width: 780px) {
    body {
      overflow-x: hidden;
    }
    ul {
      width: 100%;
      position: absolute;
      right: 0;
      top: 6vh;
      height: 20vh;
      background-color: ${baseTheme.color_secondary};
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
      box-shadow: ${baseTheme.shadow_primary};

      &.show {
        transform: translateX(0%);
      }
    }

    div:nth-of-type(2) {
      display: block;
    }
  }
`;

const Wrapper = styled.nav`
  ${props => NavBarStyle}
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const router = useRouter();

  const toggleClass = () => {
    setShowMenu(!showMenu);
  };

  const handleClick = e => {
    e.preventDefault();
    router.push('/under-construction');
  };

  return (
    <Wrapper>
      <div>
        <a href="/">
          <Image src={logo} alt="logo" width={200} height={40} />
        </a>
      </div>
      <ul className={showMenu ? 'show' : undefined}>
        {/* <NavLink href="/">Home</NavLink> */}
        {/* <NavLink href="/">Blog</NavLink> */}
        <Button className="outline" onClick={handleClick}>
          Login
        </Button>
      </ul>
      <div
        className={showMenu ? 'close' : undefined}
        onClick={() => void toggleClass()}
      >
        <div />
        <div />
        <div />
      </div>
    </Wrapper>
  );
};

export default Navbar;
