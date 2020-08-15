import styled, { keyframes } from 'styled-components';
import { MdKeyboardBackspace } from 'react-icons/md';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

import signInBackground from '../../assets/images/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  overflow: hidden;
`;

export const BackIcon = styled(MdKeyboardBackspace)`
  fill: var(--color-primary);

  transition: all 0.2s;

  &:hover {
    fill: var(--color-primary-darker);
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackground}) no-repeat center;
  background-size: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 650px;

  @media (max-width: 768px) {
    max-width: 768px;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-align: left;

  animation: ${appearFromLeft} 1s;

  > a {
    align-self: flex-start;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  form {
    width: 352px;
    height: 100%;

   > h1 {
      color: var(--color-text-title);
      font-size: 3.6rem;
      margin-bottom: 15px;
    }

    > p {
      color: var(--color-text-base);
      font-size: 1.6rem;
      margin-bottom: 30px;
    }
  }
`;

export const EyeVisible = styled(AiOutlineEyeInvisible)`
  fill: var(--color-primary);
`;