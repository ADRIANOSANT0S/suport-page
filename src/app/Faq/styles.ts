'use client'

import styled from 'styled-components'

import { breakPoint, colors } from '@/components/GlobalStyle/style'

export const ContainerPosition = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${breakPoint.tablet}) {
    padding-top: 72px;
  }
`

export const Container = styled.div`
  max-width: 664px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: ${breakPoint.tablet}) {
    width: 90%;
  }
`
export const FaqContainer = styled.ul`
  color: ${colors.black};
  margin-top: 56px;

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 19.36px;
    margin-left: 14px;
  }

  .mg-bottom {
    margin-bottom: 56px;
  }

  .itemDestaque {
    list-style: disc;
    margin: 24px 0;
  }

  .mg-l {
    margin-left: 40px;
  }

  ul {
    margin-left: 70px;
  }
`
export const FaqItem = styled.li`
  display: flex;
`

export const Card = styled.div`
  display: flex;
  column-gap: 12px;
  background-color: ${colors.blue};
  padding: 8px 12px;
  border-radius: 12px;
  color: ${colors.white};
  width: 100%;
  margin-bottom: 40px;

  h3 {
    font-weight: 600px;
    font-size: 16px;
    line-height: 19px;
    margin: 8px 0 8px 0;
  }

  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  }
`

export const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  margin-bottom: 16px;
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 64px;
`

export const ButtonYes = styled.button`
  padding: 8px 0;
  max-width: 240px;
  width: 100%;
  background-color: ${colors.blue};
  border-radius: 16px;
  border: 1px solid transparent;

  font-size: 32px;
  font-weight: 800;
  line-height: 38.73px;
  text-align: center;
  color: ${colors.white};

  &:hover {
    border: 1px solid ${colors.blue};
    color: ${colors.blue};
    background-color: transparent;
  }
`

export const ButtonNo = styled(ButtonYes)`
  background-color: transparent;
  border: 1px solid ${colors.blue};
  margin-left: 40px;
  color: ${colors.blue};

  &:hover {
    background-color: ${colors.blue};
    color: ${colors.white};
  }
`
