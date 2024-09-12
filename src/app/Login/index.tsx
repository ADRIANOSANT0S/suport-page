import Link from 'next/link'
import Image from 'next/image'

import Button from '@/components/Button'
import Title from '@/components/Title'

import * as S from './styles'

const Login = () => {
  return (
    <div className="flex">
      <S.containerBg>
        <div className="container">
          <p>
            Abra a porta para solucionar os problemas do seu carro e dirija com
            tranquilidade
          </p>
          <div className='responsive-image'>
            <Image
              src="/image/vetor_car_reparo.png"
              alt="Logo da empresa Porto Seguro"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </S.containerBg>
      <S.ContainerLogin>
        <div>
          <div>
            <S.ContainerLogo>
              <Image
                src="/image/arrow_back.png"
                alt="Logo da empresa Porto Seguro"
                width={48}
                height={32}
              />

              <Image
                src="/image/logo_porto_seguro.png"
                alt="Logo da empresa Porto Seguro"
                width={140} // Largura da imagem
                height={32}
              />
            </S.ContainerLogo>
            <Title as="h3">Acessar Conta</Title>
            <form>
              <S.InputGroup>
                <S.Label htmlFor="login">CPF ou e-mail</S.Label>
                <S.Input type="text" placeholder="" id="login" />
              </S.InputGroup>
              <S.InputGroup>
                <S.Label htmlFor="password">senha</S.Label>
                <S.Input type="text" id="password" />
              </S.InputGroup>
              <S.TextRight>
                <Link href="/Home" className="color-blue">
                  Esqueci minha senha
                </Link>
              </S.TextRight>
              <Button size="big" type="submit">
                Entrar
              </Button>
            </form>
          </div>
          <S.TextSize18>
            Não tem uma conta?{' '}
            <Link href="/Faq" className="color-blue">
              Cadastre-se
            </Link>
          </S.TextSize18>
          <div className="line"></div>
          <S.SubTitle>O que é ReparoRápido?</S.SubTitle>
          <S.TextSmall>
            Acesse as informações e descubra tudo que o ReparoRápido pode te
            oferecer
          </S.TextSmall>
          <Button size="small" type="button">
            <Link href="#" className="text-white">
              Saiba mais
            </Link>
          </Button>
          <S.Text>
            Aponte a câmera do celular e{' '}
            <Link href="#" className="color-blue">
              Saiba mais!
            </Link>
          </S.Text>
          <Image
            src="/image/qrCode.png"
            alt="QrCode par saber mais informações"
            width={80}
            height={80}
          />
        </div>
      </S.ContainerLogin>
    </div>
  )
}

export default Login
