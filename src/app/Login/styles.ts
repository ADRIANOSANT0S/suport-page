'use client'

import styled from 'styled-components'

import { colors } from '@/components/GlobalStyle/style'

export const containerBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 951px;
  width: 779px;
  padding: 56px 24px 16px 24px;
  background-color: ${colors.bgLogin};

  p {
    color: ${colors.white};
    font-weight: 600;
    font-size: 32px;
    line-height: 38.73px;
    margin-bottom: 16px;
  }
`

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 56px 88px 56px;

  > div {
    border: 1px solid ${colors.grey};
    border-radius: 10px;
    padding: 16px;
    max-width: 349px;
    width: 100%;
    height: 558px;
  }
`

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
`
