// import styled from 'styled-components';
import { HeaderStyled } from './styled';
import { Button } from '@chakra-ui/react'

export const Header = () => {
  return (
    <HeaderStyled>
      <Button  colorScheme='whiteAlpha'>Cookenu</Button>
      <Button colorScheme='whiteAlpha'>Login</Button>
    </HeaderStyled>
  )
}