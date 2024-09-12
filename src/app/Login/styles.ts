'use client'

import styled from 'styled-components'

import { breakPoint, colors } from '@/components/GlobalStyle/style'

export const containerBg = styled.div`
  display: flex;
  flex: 1;
  width: 60%;
  flex-direction: column;
  justify-content: flex-end;
  padding: 120px 24px 16px 24px;
  background-color: ${colors.bgLogin};

  p {
    color: ${colors.white};
    font-weight: 900;
    font-size: 24px;
    line-height: 38.73px;
    margin-bottom: 16px;
    padding: 0 24px;
  }

  .responsive-image {
    position: relative;
    width: 100%;
    height: 100dvh;
  }

  @media screen and (max-width: ${breakPoint.tablet}) {
    display: none;
  }
`

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 120px 56px 88px 56px;

  > div {
    border: 1px solid ${colors.grey};
    border-radius: 10px;
    padding: 16px;
    max-width: 442px;
    width: 100%;
    height: auto;
  }
`

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
`
export const SubTitle = styled.h2`
  color: ${colors.black};
  margin-bottom: 16px;
  font-size: 12px;
  font-weight: 600;
`

export const TextSize18 = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.lightGrey};
`

export const TextSmall = styled.p`
  color: ${colors.black};
  font-weight: 200;
  font-size: 11px;
  line-height: 14px;
`
export const Text = styled(TextSmall)`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 16px;
`
