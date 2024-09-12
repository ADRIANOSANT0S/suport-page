'use client'

import { useState } from 'react'

import * as S from './styles'

const Aside = () => {
  const [openMenu, setOpemMenu] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [showLinks, setShowLinks] = useState(false)

  const handleMenuClick = () => {
    setOpemMenu(!openMenu)
    if (showLinks) {
      handleMenuContainerClick()
    }
  }

  const handleMenuContainerClick = () => {
    if (openMenu) {
      setShowLinks(!showLinks)
      setClicked(!clicked)
    }
  }

  return (
    <S.AsideContainer openMenu={openMenu} showListItems={showLinks}>
      <S.Menu onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </S.Menu>
      <S.MenuContainer
        openMenu={openMenu}
        clicked={clicked}
        onClick={handleMenuContainerClick}
      >
        <span>+</span> <span>Nova conversa</span>
      </S.MenuContainer>
      <div>
        <S.MenuList>Recentes</S.MenuList>
        <S.ContainerItemMenu>
          <li>
            <S.LinkMenu href="/Home">Problema na direção</S.LinkMenu>
          </li>
          <li>
            <S.LinkMenu href="/Faq">Bateria não da carga</S.LinkMenu>
          </li>
        </S.ContainerItemMenu>
      </div>
    </S.AsideContainer>
  )
}

export default Aside
