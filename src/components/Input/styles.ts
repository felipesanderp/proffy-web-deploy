import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean
}

interface LabelProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;

  background: var(--color-box-footer);
  width: 100%;
  height: 72px;
  color: var(--color-text-base);
  border: 1px solid var(--color-line-in-white);

  ${(props => 
    props.isFocused && 
    css`
      &::before {
      position: absolute;
      align-self: center;
      content: '';
      height: 48px;
      left: -0.1%;
      width: 2px;
      border-radius: 8px;
      background: var(--color-primary);
    } 
  `)}

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  input {
   
    width: 100%;
    height: 65px;
    font-size: 1.6rem;
    line-height: 2.4rem;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 12px 12px 0 12px;
    color: var(--color-text-base);

    align-self: flex-end;
  }

  svg {
    margin-right: 24px;
    flex-shrink: 0;
  }
`;

export const Label = styled.label<LabelProps>`
    position: absolute;
    color: var(--color-text-complement);
    font-size: 1.6rem;
    top: 50%;
    left: 12px;
    cursor: text;
    pointer-events: none;

    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    
    transition: 0.15s ease-in-out;

    ${(props => 
    props.isFocused && 
    css`
      top: 2.35rem;
      font-size: 12px;
      color: #C1BCCC;
    } 
  `)}

  ${(props => 
    props.isFilled && 
    css`
      top: 2.35rem;
      font-size: 12px;
      color: #C1BCCC;
    } 
  `)}
`

export const Eye = styled.div``;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 24;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
