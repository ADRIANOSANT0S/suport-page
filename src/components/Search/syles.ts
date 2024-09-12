'use client'

import { styled } from 'styled-components'

import { colors } from '../GlobalStyle/style'

export const InputGroup = styled.div`
  display: block;
  padding: 24px;
  max-width: 1024px;
  width: 100%;
  border: 1px solid ${colors.black};
  border-radius: 30px;
  margin: 88px 0 40px 0;

  color: ${colors.lightGrey2};
  font-weight: 600;
  font-size: 16px;
  line-height: 19.36px;

  input {
    outline: none;
    border: none;
    width: 100%;
  }

  label {
    display: none;
  }
`
