'use client'

import Image from 'next/image'
import { useState } from 'react'

import Title from '../Title'

import * as S from './styles'

export const MenuMobile = () => {
  const [isColorChanged, setIsColorChanged] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const colorState = () => {
    setIsColorChanged(!isColorChanged)
  }

  const OpenMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuToggle = () => {
    OpenMenu()
    colorState()
  }

  return (
    <div className='responsive-menu-Mobile'>
      <S.HeaderMobile changeColor={isColorChanged}>
        <div>
          <div>
            <S.MenuMobile changeColor={isColorChanged} onClick={menuToggle}>
              <span></span>
              <span></span>
              <span></span>
            </S.MenuMobile>
            <Title>ReparoRápido</Title>
          </div>
          <Image
            src="/image/icon_perfil.png"
            alt="Icon de perfil"
            width={40}
            height={40}
          />
        </div>
      </S.HeaderMobile>
      <S.SidebarMenuMobile show={isMenuOpen}>
        <S.MenuList>Recentes</S.MenuList>
        <S.ContainerItemMenu>
          <li>
            <S.LinkMenu href="/Home">Problema na direção</S.LinkMenu>
          </li>
          <li>
            <S.LinkMenu href="/Faq">Bateria não da carga</S.LinkMenu>
          </li>
        </S.ContainerItemMenu>
      </S.SidebarMenuMobile>
    </div>
  )
}
