"use client"

import styled from 'styled-components'

import { colors } from '../GlobalStyle/style'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  width: 100%;
  color: ${colors.white};
  font-weight: 600;
  padding: ${(prop) => (prop.size === 'small' ? '8px 0' : '12px 0')};
  font-size: ${(prop) => (prop.size === 'small' ? '16px' : '20px')};
  line-height: ${(prop) => (prop.size === 'small' ? '19.36px' : '24px')};
  border-radius: 8px;
  background-color: ${colors.blue};
  border: none;
  margin: 16px 0;

  .text-white {
    color: ${colors.white};
  }
`
