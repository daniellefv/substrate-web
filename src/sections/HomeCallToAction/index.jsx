import React from 'react';
import { Banner } from 'components';
import { useRouter } from 'next/router';
import { Button } from 'components';

export const HomeCallToAction = () => {
  const router = useRouter();

  const handleClick = e => {
    e.preventDefault();
    router.push('/contact');
  };
  return (
    <Banner
      title="Start your own digital garden now!"
      subtitle="it's easy, fast and free! it will only take you a few minutes!"
    >
      <Button className="white" onClick={handleClick}>
        Start it now!
      </Button>
    </Banner>
  );
};

export default HomeCallToAction;
