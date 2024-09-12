'use client'

import { Inter } from 'next/font/google'
import { createGlobalStyle } from 'styled-components'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const colors = {
  grey: '#D9D9D9',
  lightGrey: '#989898',
  lightGrey2: '#7B6E6E',
  black: '#000000',
  blue: '#089CE2',
  white: '#ffffff',
  bgLogin: '#a4c6cf'
}

export const breakPoint = {
  tablet: '1023px',
  mobile: '768px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: ${inter.style.fontFamily};
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: ${breakPoint.tablet}) {
      width: 90%;
    }
  }

  .flex {
    display: flex;

    @media screen and (max-width: ${breakPoint.tablet}) {
      justify-content: center;
    }
  }

  .center {
    align-items: center;
  }

  .direction {
    flex-direction: column;
  }

  .color-blue {
    color: ${colors.blue};
  }

  .line {
    width: 100%;
    border: 1px solid ${colors.grey};
    margin: 16px 0;
  }

  .responsive-menu {
    @media screen and (max-width: ${breakPoint.tablet}) {
      display: none;
      width: 100%;
    }
  }
  .responsive-menu-Mobile {
    @media screen and (min-width: ${breakPoint.tablet}) {
      display: none;
    }
  }
`
