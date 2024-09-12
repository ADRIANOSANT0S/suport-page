import Head from 'next/head'

import StyledComponentsRegistry from '../lib/registry'

import Footer from '@/components/Footer'

import { GlobalStyle } from '@/components/GlobalStyle/style'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <title>Página de suporte ao cliente</title>
      </Head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
