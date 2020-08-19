import styled from 'styled-components';
import { FiPower } from 'react-icons/fi';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  height: 40vh;
  background: var(--color-primary);

  @media (min-width: 768px) {
    height: 60vh;
  }
`;

export const Header = styled.div`
  width: 90vw;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;

    > img {
      width: 4.0rem;
      height: 4.0rem;
      border-radius: 50%;
    }

    > p {
      font-size: 1.4rem;
      line-height: 3.0rem;
      color: var(--color-text-in-primary);
      margin-left: 1.5rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 2.5rem;
    width: 4.0rem;
    height: 4.0rem;
    border-radius: 0.8rem;
    background: var(--color-primary-dark);
    border: 0;
    outline: 0;

    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background: var(--color-primary-darker);
    }
  }

  @media (min-width: 1360px) and (max-width: 1439px) {
    width: 80vw;
    max-width: 1360px;
  }
  @media (min-width: 1440px) {
    width: 80vw;
    max-width: 1440px;
  }
  @media (min-width: 2560px) {
    width: 70vw;
    max-width: 2560px;
  }

`;

export const LogoutIcon = styled(FiPower)`
  color: var(--color-text-in-primary);
`;

export const LogoContainer = styled.div`
  width: 90vw;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: column;

    > img {
      display: none;
      height: 10rem;
      margin-right: 5rem;
    }

    > h2 {
      display: none;
      font-weight: 600;
      font-size: 2.4rem;
      line-height: 4.6rem;
      margin-top: 0.8rem;
      color: var(--color-text-in-primary);
    }
  }

  > img {
    width: 100%;
    height: 25vh;
  }

  @media (min-width: 768px) {
    max-width: 768px;

    > div {
      > img {
        display: initial;
      }

      > h2 {
        display: initial;
      } 
    }

    > img {
      width: 300px;
      height: 30vh;
    }
  }

  @media (min-width: 1024px) {
    width: 90vw;
    max-width: 1024px;
    flex-direction: row;
    justify-content: space-between;

    > div {
      > h2 {
        max-width: 330px;
      }
    }

    > img {
      width: 40vw;
      height: 40vh;
    }
  }

  @media (min-width: 1360px) and (max-width: 1439px) {
    width: 80vw;
    max-width: 1360px;

    > img {
      height: 290px;
    }
  }

  @media (min-width: 1440px) {
    width: 80vw;
    max-width: 1440px;

    > img {
      height: 300px;
    }
  }
  @media (min-width: 2560px) {
    width: 70vw;
    max-width: 2560px;

    > div {

      > img {
        height: 13rem;
      }

      > h2 {
        max-width: 100%;
      }
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 90vw;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 90vw;
    max-width: 768px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    width: 90vw;
    max-width: 1024px;

    margin-top: 5.6rem;
  }

  @media (min-width: 1360px) and (max-width: 1439px) {
    width: 85vw;
    max-width: 1360px;
  }

  @media (min-width: 1440px) {
    width: 85vw;
    max-width: 1440px;
  }

  @media (min-width: 2560px) {
    width: 80vw;
    max-width: 2560px;
  }
`;

export const Title = styled.div`
  > div {
    margin-top: 5.6rem;

    > p {
      font-size: 2rem;
      line-height: 3rem;
    }

    > span {
      font-size: 2rem;
      font-weight: 600;
      line-height: 3rem;
    }
  }

  @media (min-width: 768px) {
    > div {
      margin-top: 0;
    }
  }
`;

export const Total = styled.div`
  margin-top: 5.6rem;

  > span {
    color: var(--color-text-complement);
    font-size: 1.2rem;
    line-height: 2rem;

    > img {
      margin-left: 0.8rem;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export const Buttons = styled.div`
  margin-top: 2.5rem;

  display: flex;
  justify-content: space-between;

    a {
      width: 30rem;
      height: 10.4rem;
      border-radius: 0.8rem;
      font: 700 2.0rem Archivo;

      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      text-decoration: none;
      color: var(--color-button-text);

      transition: all 0.2s;

      & + a {
        margin-left: 1.5rem;
      }

      &.study {
        background-color: var(--color-primary-lighter);

        &:hover {
          background-color: var(--color-primary-light);
          text-decoration: underline;
        }
      }

      &.give-classes {
        background-color: var(--color-secundary);

        &:hover {
          background-color: var(--color-secundary-dark);
          text-decoration: underline;
        }
      }

      > img {
        width: 4rem;
        margin-right: 1.6rem;
      }
    }
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;

    a {
      width: 23.5rem;
      height: 10rem;

      & + a {
        margin-top: 1.5rem;
        margin-left: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    margin-top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    a {
      width: 23.5rem;
      height: 10rem;

      & + a {
        margin-top: 0;
        margin-left: 1.5rem;
      }
    }
  }

  @media (min-width: 1360px) {
    a {
      width: 28rem;
    }
  }
`;