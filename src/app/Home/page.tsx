import Image from 'next/image'

import Header from '@/components/Header'

import Search from '@/components/Search'
import Aside from '@/components/Aside'
import { MenuMobile } from '@/components/MenuMobile'

import * as S from './styled'

const Home = () => (
  <div className="container">
    <MenuMobile />
    <div className="responsive-menu">
      <Aside />
      <Header />
    </div>
    <S.Title>
      Olá, <span className="color-blue">Nicollas</span> <br />
      Como posso te ajudar?
    </S.Title>

    <S.ListContainer>
      <S.ListItem>
        <h3>Meu motor parou, preciso de ajuda</h3>
        <div>
          <Image src="/image/circle.svg" alt="Circulo" width={42} height={39} />
        </div>
      </S.ListItem>
      <S.ListItem>
        <h3>A direção do meu carro está muito dura</h3>
        <div>
          <Image src="/image/circle.svg" alt="Circulo" width={42} height={39} />
        </div>
      </S.ListItem>
      <S.ListItem>
        <h3>Não consigo dar partida no meu veiculo</h3>
        <div>
          <Image src="/image/circle.svg" alt="Circulo" width={42} height={39} />
        </div>
      </S.ListItem>
      <S.ListItem>
        <h3>O vidro não fecha, como devo prosseguir?</h3>
        <div>
          <Image src="/image/circle.svg" alt="Circulo" width={42} height={39} />
        </div>
      </S.ListItem>
    </S.ListContainer>
    <Search />
  </div>
)

export default Home
