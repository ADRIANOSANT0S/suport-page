"use client"

import { styled } from 'styled-components'

import { breakPoint, colors } from '@/components/GlobalStyle/style'

export const Title = styled.h1`
  color: ${colors.black};
  font-weight: 600;
  font-size: 56px;
  line-height: 64.8px;

  @media screen and (max-width: ${breakPoint.tablet}) {
    padding-top: 80px;
  }
`

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  gap: 12px;

  @media screen and (max-width: ${breakPoint.tablet}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const ListItem = styled.li`
  position: relative;
  border: 1px solid ${colors.black};
  border-radius: 8px;
  padding: 16px;
  height: 200px;
  width: 200px;

  h3 {
    color: ${colors.lightGrey2};
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 72px
  }

  div {
    position: absolute;
    bottom: 12px;
    right: 16px;
  }
`
