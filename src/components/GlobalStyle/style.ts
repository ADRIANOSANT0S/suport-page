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
  black: '#000000',
  blue: '#089CE2',
  white: '#ffffff',
  bgLogin: '#a4c6cf'
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
  }

  .flex {
    display: flex;
  }
`
