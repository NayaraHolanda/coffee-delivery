import { HeaderContainer, Local, Nav } from './styles'

import logo from '../../assets/logo.svg'
import { Cart } from '../Cart'

import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>
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
