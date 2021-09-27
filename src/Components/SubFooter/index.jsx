import React from 'react'
import { SubFooters, Container, Content, Copyright, Logo } from './style'
import Brand from '../../images/subFooter/Logo.png'


export const SubFooter = () => {
  return (
    <SubFooters>
      <Container>
        <Content>
          <Logo>
            <img src={Brand} alt='Logo pic.' />
          </Logo>
          <Copyright>© Skillcare 2021 all rights reserved</Copyright>
        </Content>
      </Container>
    </SubFooters>
  )
}
