import React, { useState } from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../../components/buttons/MenuButton"
import logo from "../../../static/images/logos/logo.svg"
import { Link } from "gatsby"
import MenuTooltip from "../tooltips/MenuTooltip"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = event => {
    setIsOpen(!isOpen)
    event.preventDefault()
  }
  return (
    <Wrapper>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={event => handleClick(event)}
            >
              account
            </MenuButton>
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
      </MenuWrapper>
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  display: grid;
  top: 60px;
  grid-template-columns: 44px auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
`
