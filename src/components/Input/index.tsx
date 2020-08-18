import React, {
  InputHTMLAttributes,
  useRef,
  useState,
  useCallback,
  useEffect 
} from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, Error, Label, Eye } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
  toggleVisibility?(): void;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  containerStyle = {},
  icon: Icon,
  toggleVisibility,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setISFilled] = useState(false);
  const { fieldName, registerField, error, defaultValue } = useField(name);

  const handleVisibility = useCallback(() => {
    if (toggleVisibility) {
      toggleVisibility();
    }

    return;
  }, [toggleVisibility]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setISFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isFocused={isFocused}
      isErrored={!!error}
    >
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      <Label isFilled={isFilled} isFocused={isFocused}>{label}</Label>
      
      { error && error ? <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error> 
        : Icon && <Eye onClick={handleVisibility}><Icon size={20} /></Eye>
      }
    </Container>
  );
}

export default Input;