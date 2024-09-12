'use client'

import Link from 'next/link'
import styled from 'styled-components'

import { breakPoint, colors } from '../GlobalStyle/style'

export const FooterContainer = styled.footer`
  background-color: ${colors.grey};
  height: 72px;
  display: flex;
  align-items: center;

  //Posiciona o footer por sima do sidebar
  position: relative;
  z-index: 10;

  .container {
    max-width: 1440px;
    width: 100%;
  }

  @media screen and (max-width: ${breakPoint.tablet}) {
    padding-left: 24px;
    flex-wrap: wrap;
  }
`
export const ListItems = styled.ul`
  display: flex;
`

export const Item = styled(Link)`
  margin-right: 24px;
  color: ${colors.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 15.73px;
`
