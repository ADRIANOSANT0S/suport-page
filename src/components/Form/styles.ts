'use client'

import { styled } from 'styled-components'

import { colors } from '../GlobalStyle/style'

export const InputGroup = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 2px 4px;

  &.error {
    border-color: red;
  }
`

export const Input = styled.input`
  padding: 4px;
  width: 100%;
  color: ${colors.black};
  font-size: 16px;
  font-weight: 400px;
  border: none;
  outline: none;
`
export const Label = styled.label`
  display: block;
  color: ${colors.lightGrey};
  font-weight: 400;
  font-size: 12px;
  line-height: 14.89px;
`
export const TextRight = styled.div`
  text-align: right;
`
