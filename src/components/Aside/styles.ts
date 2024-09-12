'use client'
import Link from 'next/link'

import styled from 'styled-components'
import { colors } from '../GlobalStyle/style'

export const AsideContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.blue};
  width: 72px;
  height: 100dvh;
  padding: 32px 24px;

  .show {
    display: block;
  }

  div:last-of-type {
    display: none;
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
export const MenuContainer = styled.div`
  padding: 10px 16px;
  color: ${colors.white};
  font-weight: 400;
  border: 1px solid ${colors.white};
  border-radius: 20px;
  cursor: pointer;

  span:first-of-type {
    font-size: 24px;
    line-height: 16px;
  }

  span:last-of-type {
    margin-left: 14px;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    display: none;
  }
`

export const ContainerItemMenu = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding-left: 36px;
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
