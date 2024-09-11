import Image from 'next/image'

import Title from '../Title'

import * as S from './styles'

export const Header = () => (
  <S.HeaderContainer className="container">
    <Title as="h2">ReparoRápido</Title>
    <S.Profile>
      <span>Nome Usuário</span>
      <Image
        src="/image/icon_perfil.png"
        alt="Icon de perfil"
        width={40}
        height={40}
      />
    </S.Profile>
  </S.HeaderContainer>
)
