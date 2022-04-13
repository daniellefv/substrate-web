import React from 'react';
import styled, { css } from 'styled-components';
import baseTheme from 'styles/theme';
import { NavLink, Banner } from 'components';
import { useRouter } from 'next/router';
import { Button } from 'components';

export const SectionStyle = css`
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${baseTheme.color_primary};
  color: ${baseTheme.color_quaternary};
  margin-top: 0;
  padding: 0 !important;

  .mainBox {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding: 2rem;

    div {
      max-width: 450px;
      padding-right: 2rem;
      align-items: left;
    }

    div:first-child {
      margin-top: -0.2rem;
      line-height: 2.5rem;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style: none;

    li {
      color: white;
      text-align: left;
    }
  }

  a {
    font-weight: 400;
    margin-top: 0.2rem;
  }

  .social {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: start;
    flex-direction: row;
  }
  .social-item {
    text-align: center;
    cursor: pointer;
    width: 50px;
    height: 50px;
    background-color: #fff;
    margin: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    color: ${baseTheme.color_primary};
    z-index: 1;
    transition: 0.5s ease-in-out;
  }
  .social-item::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -100%;
    z-index: -1;
    border-radius: 50%;
    transform: scale(0);
    transition: 0.3s ease-in-out;
  }
  .social-item:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 100%;
    right: -100%;
    top: 0;
    background-color: rgba(255, 255, 255, 0.3);
    transition: 0.6s ease-in-out;
  }
  .social-item:hover {
    color: #fff;
  }
  .social-item:hover::before {
    transform: scale(0.9);
    left: 0;
  }
  .social-item:hover::after {
    right: 0;
  }
  .social-item::before {
    background-color: ${baseTheme.color_secondary};
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    .mainBox {
      flex-direction: column;
      justify-content: left;
      align-items: left;

      div {
        padding: 0;
      }
      div:nth-child(2) {
        display: none;
      }
    }
  }
`;

const Wrapper = styled.section`
  ${props => SectionStyle}
`;

const Footer = () => {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push('/under-construction');
  };

  return (
    <Wrapper>
      <Banner
        title="Start your own digital garden now!"
        subtitle="it's easy, fast and free"
      >
        <Button className="white" onClick={handleClick}>
          Start it now!
        </Button>
      </Banner>
      <div className="mainBox">
        <div></div>

        <div>
          <h3>Menu</h3>
          <ul>
            {/* <NavLink href="/">Home</NavLink> */}
            {/* <NavLink href="/">Blog</NavLink> */}
            <NavLink href="/under-construction">Login</NavLink>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="mailto:daniellefv@hotmail.com">daniellefv@hotmail.com</a>
            </li>
            <li>
              <p>Faro - Portugal</p>
            </li>
          </ul>
          <ul className="social">
            <a
              href="https://www.linkedin.com/in/danielle-vendruscolo-figueiredo-027b2a114/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <li className="social-item">
                <i className="fa fa-linkedin"></i>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
