import { HeaderContainer, Local, Nav } from './styles'

import logo from '../../assets/logo.svg'
import { Cart } from '../Cart'

import { MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <Nav>
        <Local>
          <span>
            <MapPin size={22} weight="fill" />
          </span>
          Porto Alegre, RS
        </Local>
        <Cart />
      </Nav>
    </HeaderContainer>
  )
}
