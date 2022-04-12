import Image from 'next/image';
import styled from 'styled-components';

import loader from 'assets/loader/loader.gif';

export const FullPageContainer = styled.div`
  width: 200px;
  height: 200px;
`;

const Loader = () => {
  return (
    <FullPageContainer>
      <Image src={loader} alt="loading" width={200} height={200} />
    </FullPageContainer>
  );
};

export default Loader;
