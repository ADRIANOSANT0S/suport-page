import Head from 'next/head'

import { GlobalStyle } from '@/components/GlobalStyle/style'
import StyledComponentsRegistry from '../lib/registry'

import Footer from '@/components/Footer'

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
