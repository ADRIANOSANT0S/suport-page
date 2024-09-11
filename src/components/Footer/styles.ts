'use client'

import styled from 'styled-components'
import { colors } from '../GlobalStyle/style'
import Link from 'next/link'

export const FooterContainer = styled.footer`
  background-color: ${colors.grey};
  height: 72px;
  display: flex;
  align-items: center;
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
