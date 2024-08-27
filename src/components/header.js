import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">Yu-Chun Website</NavLink>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: red;
  height: 80px;
  display: flex;
  justify-content: space-between;
`
const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`
