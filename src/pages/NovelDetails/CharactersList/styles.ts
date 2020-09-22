import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 108rem;
  min-height: 10.8rem;

  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.backgroundSmooth};

  border-radius: 0.8rem;

  padding: 1.6rem;

  strong {
    border-bottom: 1px solid ${({ theme }) => theme.colors.textLightWhite};
    font: 700 2.4rem ${({ theme }) => theme.fonts.special};
    width: 100%;
  }

  .list {
    margin-top: 0.8rem;

    width: 100%;
    max-height: 43.2rem;

    overflow-y: auto;
    scrollbar-width: thin;

    display: grid;
    gap: 0.8rem;
    grid-template-columns: repeat(8, 1fr);

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.8rem;

    .list {
      grid-template-columns: repeat(3, 1fr);
    }

    strong {
      font-size: 1.8rem;
    }
  }
`;

export const CharacterBox = styled(Link)`
  height: 10rem;
  width: 10rem;

  display: block;

  overflow: hidden;

  border-radius: 50%;

  position: relative;

  img {
    transform: scale(1);

    transition: transform 0.3s;
  }

  .name {
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    background-color: ${({ theme }) => theme.colors.primaryTransparent};
    color: ${({ theme }) => theme.colors.textLightWhite};

    visibility: hidden;

    text-align: center;
    padding: 0.8rem;
    font-size: 1.4rem;
    text-overflow: ellipsis;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    .name {
      visibility: visible;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 8rem;
    height: 8rem;

    img {
      width: 8rem;
      height: 8rem;
    }
  }
`;
