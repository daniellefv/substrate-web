import React from 'react';
import styled, { css } from 'styled-components';
import { mock } from 'assets/images';
import { ImageBox } from 'components';
import Image from 'next/image';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element } from 'react-scroll';
import Tilt from 'react-tilt';

export const SectionStyle = css`
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-top: 2.8rem;
  flex-wrap: wrap;

  span {
    letter-spacing: 0.2rem;
    opacity: 0.7;
  }
`;

const Wrapper = styled.section`
  ${props => SectionStyle}
`;

const DescriptionWrapper = styled.div`
  padding: 2rem;
  margin: 0 1rem;
  max-width: 500px;
  align-items: left;
  text-align: left;
`;

export const HomeBenefits = () => {
  return (
    <Element name="our_products" className="our_products">
      <Wrapper id="productsSection">
        <ScrollAnimation animateIn="fadeInUp" duration={2} animateOnce>
          <DescriptionWrapper>
            <p>
              <span>BENEFITS</span>
            </p>
            <h2>
              An awesome solution to help you document your learning journey!
            </h2>
            <ul>
              <li>
                Create several gardens by area of knowledge. ex: technology,
                biology, art, etc...
              </li>
              <br />
              <li>
                Add text, code snippets and also images to illustrate your
                journey!
              </li>
              <br />
              <li>
                Find easily what you published in the past - by the timeline
                history and categories
              </li>
              <br />
              <li>
                You can start small (with a seed) and keep adding more to it as
                you dive into the subject.
              </li>
            </ul>
          </DescriptionWrapper>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce>
          <Tilt options={{ max: 30 }}>
            <ImageBox>
              <Image
                src={mock}
                href="/"
                alt="image of the system in the browser"
                width={450}
                height={450}
              />
            </ImageBox>
          </Tilt>
        </ScrollAnimation>
      </Wrapper>
    </Element>
  );
};

export default HomeBenefits;
