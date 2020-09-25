import styled from 'styled-components';

const NoDataContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: calc(100vh - 8rem);

  text-align: center;

  h1 {
    font-size: 3.6rem;

    margin-bottom: 2rem;
  }

  span {
    font-size: 2rem;
  }
`;

export default NoDataContainer;
