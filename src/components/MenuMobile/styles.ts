'use client'

import Link from 'next/link'
import { styled } from 'styled-components'

import { colors } from '../GlobalStyle/style'
import { TitleContainer } from '../Title/styles'

interface ChangeColorProps {
  changeColor: boolean
}

interface ShowSidebarPros {
  show: boolean
}

export const HeaderMobile = styled.header<ChangeColorProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 24px 0 24px;
  margin-bottom: 56px;
  z-index: 100;

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;

    > div {
      display: flex;
      justify-content: space-between;
      column-gap: 14px;

      ${TitleContainer} {
        color: ${(prop) => (prop.changeColor ? colors.white : colors.black)};
        transition: color 0.3s ease-in-out;
      }
    }
  }
`

export const SidebarMenuMobile = styled.aside<ShowSidebarPros>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 80%;
  background-color: ${colors.blue};
  padding: 72px 0 0 24px;
  opacity: ${(prop) => (prop.show ? 1 : 0)}; /* Start with opacity 0 */
  transition: opacity 0.3s ease-in; /* Smooth opacity transition */
  visibility: ${(props) =>
    props.show ? 'visible' : 'hidden'}; /* Hide the element when not shown */
`

export const MenuMobile = styled.div<ChangeColorProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 64px;
  cursor: pointer;

  span {
    width: 20px;
    height: 2px;
    background-color: ${(props) =>
      props.changeColor ? colors.white : colors.blue};
    margin-bottom: 4px;
    border-radius: 8px;
  }
`

export const ContainerItemMenu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-left: 24px;
`

export const MenuList = styled.button`
  margin: 24px 0;
  color: ${colors.white};
  font-size: 14.45px;
  font-weight: 400;
  line-height: 17.49px;
  text-align: left;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const LinkMenu = styled(Link)`
  color: ${colors.white};
  font-size: 14.45px;
  font-weight: 400;
  line-height: 17.49px;
  text-align: left;
`
