'use client'

import styled from 'styled-components'

import { colors } from '../GlobalStyle/style'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Profile = styled.div`
  display: flex;
  align-items: center;

  span {
    color: ${colors.black};
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
  }
`
