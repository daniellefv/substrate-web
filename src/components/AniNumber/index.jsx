import * as React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';
import baseTheme from 'styles/theme';

const Wrapper = styled(CountUp)`
  span {
    color: ${baseTheme.color_gradient_tertiary};
    font-weight: 800;
    font-size: 8rem;
  }
`;

const AniNumber = ({ end, start, duration, suffix, prefix }) => {
  const baseDuration = 2;

  return (
    <Wrapper
      start={start}
      end={end}
      redraw={true}
      duration={duration ? duration : baseDuration}
      suffix={suffix}
      prefix={prefix}
    >
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </Wrapper>
  );
};

export default AniNumber;
