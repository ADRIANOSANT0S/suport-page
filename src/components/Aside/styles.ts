'use client'
import Link from 'next/link'

import styled from 'styled-components'
import { colors } from '../GlobalStyle/style'

interface AsideContainerProps {
  openMenu: boolean
  showListItems: boolean
}

interface MenuContainerProps {
  clicked: boolean
  openMenu: boolean
}

export const AsideContainer = styled.aside<AsideContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.blue};
  width: ${(prop) => (prop.openMenu ? '215px' : '75px')};
  height: 100dvh;
  padding: 32px 24px;

  div:last-of-type {
    display: ${(prop) => (prop.showListItems ? 'block' : 'none')};
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 64px;
  cursor: pointer;

  span {
    width: 20px;
    height: 2px;
    background-color: ${colors.white};
    margin-bottom: 4px;
    border-radius: 8px;
  }
`

export const MenuContainer = styled.div<MenuContainerProps>`
  width: ${(props) => (props.clicked ? '172px' : '40px')};
  height: 40px;
  border-radius: ${(props) => (props.clicked ? '40px' : '20px')};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  border: 1px solid ${colors.white};
  border-radius: 20px;
  cursor: ${(props) => (props.openMenu ? 'pointer' : 'none')};
  position: relative;
  overflow: hidden;
  background-color: ${(props) => (props.clicked ? '' : 'transparent')};

  color: ${colors.white};
  font-weight: 400;

  transition-duration: 0.3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);

  span:first-of-type {
    font-size: 24px;
    line-height: 16px;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => (props.clicked ? '10%' : 'auto')};
  }

  span:last-of-type {
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    display: ${(props) => (props.clicked ? 'inline' : 'none')};
    opacity: ${(props) => (props.clicked ? '1' : '0')};
    transition-duration: 0.3s;
  }

  &:active {
    transform: translate(2px, 2px);
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
