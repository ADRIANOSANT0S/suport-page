import Image from 'next/image'

import Header from '@/components/Header'
import Search from '@/components/Search'
import Aside from '@/components/Aside'

import * as S from './styles'

const Faq = () => (
  <div className="flex center direction">
    <Aside />
    <Header />
    <S.ContainerPosition>
      <S.Container>
        <S.FaqContainer>
          <S.FaqItem className="mg-bottom">
            <Image
              src="/image/Icon_Ia.png"
              alt="Ícone IA"
              width={26}
              height={26}
            />
            <p>
              Ótimo! Vamos dar uma olhada no seu Honda Civic 2019. Para te
              ajudar da melhor forma, me diga quais são os sintomas que você
              está percebendo?
            </p>
          </S.FaqItem>
          <S.FaqItem className="mg-bottom">
            <Image
              src="/image/icon_perfil.png"
              alt="ícone perfil"
              width={26}
              height={26}
            />
            <p>
              Eu tendo ligar o meu carro e ele nao aparece nada no painel nem da
              sinal de vida Mostrar rascunhos
            </p>
          </S.FaqItem>
          <S.FaqItem>
            <Image
              src="/image/Icon_Ia.png"
              alt="Ícone IA"
              width={26}
              height={26}
            />
            <p>Algumas possibilidades para esse problema:</p>
          </S.FaqItem>
          <S.FaqItem>
            <div>
              <ul>
                <li className="itemDestaque">
                  <p>
                    Bateria descarregada: Se a bateria estiver muito fraca, o
                    carro pode não ter energia suficiente para ligar os
                    componentes eletrônicos e o motor.
                  </p>
                </li>
              </ul>
              <p className="mg-l">O que você pode fazer:</p>
              <ul>
                <li className="itemDestaque">
                  <p>
                    Tentar dar uma "chupeta" na bateria: Se você tiver outro
                    carro por perto, pode tentar ligar o seu usando a bateria do
                    outro veículo. Mas atenção: Certifique-se de fazer isso com
                    a ajuda de um adulto e seguindo as instruções corretas para
                    evitar danos ao seu carro ou ao outro veículo.
                  </p>
                </li>
              </ul>
            </div>
          </S.FaqItem>
        </S.FaqContainer>
        <S.Card>
          <Image
            src="/image/powerBetter.png"
            alt="Imagem de uma bateria de carro"
            width={148}
            height={124}
          />
          <div>
            <h3>Bateria de Carro</h3>
            <p>
              Uma bateria de carro é um dispositivo essencial que fornece
              energia para iniciar o motor e alimentar sistemas elétricos do
              véiculo. Composta por ácido sulfúticos e placas de chumbo, é
              recarregável e requeer manutenção regular para garantir seu
              desempenho adequado.
            </p>
          </div>
        </S.Card>
        <S.Text>
          Deseja marcar um horario no{' '}
          <span className="color-blue">Centro Automotivo Porto Seguro</span>{' '}
          mais perto de você?
        </S.Text>
        <S.ContainerButtons>
          <S.ButtonYes type="button">Sim</S.ButtonYes>
          <S.ButtonNo type="button">Não</S.ButtonNo>
        </S.ContainerButtons>
      </S.Container>
      <Search />
    </S.ContainerPosition>
  </div>
)

export default Faq
