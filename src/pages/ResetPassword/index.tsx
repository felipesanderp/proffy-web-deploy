import React, { useRef, useCallback, useState } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web'; 
import { FormHandles } from '@unform/core';
import { Link, useLocation } from 'react-router-dom';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';

import { Container, BackIcon, Background, Content, AnimationContainer } from './styles';

import { useSuccess } from '../../hooks/success';
import { useToast } from '../../hooks/toast'
import Input from '../../components/Input';
import Button from '../../components/Button';

interface ResetPasswordData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const { addToast } = useToast();
  const { addSuccess } = useSuccess();

  const handleSubmit = useCallback(
    async (data: ResetPasswordData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha Obrigatória'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Confirmação incorreta',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, password_confirmation } = data;
        const token = location.search.replace('?token=', '');

        if (!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          password,
          password_confirmation,
          token,
        });
        
        addSuccess({
          title: 'Senha redefinida!',
          description: 'Boa, agora você já pode realizar o seu login novamente',
          subdescription: 'e voltar aos estudos.',
          buttonText: 'Voltar ao login',
        });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na redefinição de senha',
          description: 'Ocorreu um erro ao fazer a redefinição, tente novamente',
        });
      } finally {
        setLoading(false);
      }
    }, 
    [addSuccess, addToast, location.search],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Link to="/">
            <BackIcon size={25} />
          </Link>

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Resetar senha</h1>
            <p>
              Eita, esqueceu sua senha? <br /> Não esquenta, vamos dar um jeito nisso.
            </p>

            <Input
              name="password"
              label="Nova senha"
              type="password"
              containerStyle={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
            />

            <Input
              name="password_confirmation"
              label="Confirmação da senha"
              type="password"
              containerStyle={{ borderBottomRightRadius: 8, borderBottomLeftRadius: 8 }}
            />
            
            <Button type="submit" loading={loading}>Alterar Senha</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
}

export default ResetPassword;