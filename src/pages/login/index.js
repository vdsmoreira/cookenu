import { useForm } from '../../hooks';
import { useState } from 'react';
import {
  LoginPageContainer,
  FormContainer
} from './styled';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputRightElement,
  InputGroup,
  FormHelperText,
  Button,
  Input,
} from '@chakra-ui/react';


export const LoginPage = () => {

  const [ form, onChangeInputs, clearInputs ] = useForm ({
    email: "",
    password: ""
  });

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (e) =>{
    e.preventDefault();
    console.log(form)
    setIsEmailValid(/[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(form.email))
    setIsPasswordValid(/[a-zA-Z0-9]{6}/.test(form.password))
  }

  const onClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
      <LoginPageContainer>
          <FormContainer>
            <form onSubmit={onSubmit}>
              <FormControl isInvalid={!isEmailValid}>
                <FormLabel>E-mail</FormLabel>
                <Input
                  name='email'
                  value={form.email}
                  onChange={onChangeInputs}
                  placeholder="Insira seu email"
                />
                {!isEmailValid ? (
                  <FormErrorMessage as="p">
                    E-mail inválido.
                  </FormErrorMessage>
                ) : undefined
                }
              </FormControl>
              <FormControl>
                <InputGroup size='md'>
                  <FormLabel>Senha</FormLabel>
                  
                  <Input
                      pr='4.5rem'
                      type={showPassword ? 'text' : 'password'}
                      placeholder='Senha com no mínimo 6 caracteres.'
                  />
                  <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={onClickShowPassword}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {!isPasswordValid ? (
                  <FormHelperText as="p">
                    Senha inválida.
                  </FormHelperText>
                ) : undefined
                }
              </FormControl>
              <Button type="submit" variant="form">Enviar</Button>
            </form>
          </FormContainer>
      </LoginPageContainer>
  )
}