import Link from 'next/link'
import Image from 'next/image'

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
          <Image
            src="/image/vetor_car_reparo.png"
            alt="Logo da empresa Porto Seguro"
            width={743} // Largura da imagem
            height={611}
          />
        </div>
      </S.containerBg>
      <S.ContainerLogin>
        <div>
          <div>
            <S.ContainerLogo>
              <Image
                src="/image/arrow_back.svg"
                alt="Logo da empresa Porto Seguro"
                width={40} // Largura da imagem
                height={40}
              />

              <Image
                src="/image/logo_porto_seguro.png"
                alt="Logo da empresa Porto Seguro"
                width={170} // Largura da imagem
                height={73}
              />
            </S.ContainerLogo>
            <h1>Acessar Conta</h1>
            <form>
              <input type="text" placeholder="CPF ou e-mail" />
              <input type="text" placeholder="senha" />
              <div>
                <Link href="#">Esqueci minha senha</Link>
              </div>
              <button>Entrar</button>
            </form>
          </div>
          <div>
            <span>
              Não tem uma conta? <Link href="/">Cadastre-se</Link>
            </span>
          </div>
          <h2>O que é ReparoRápido?</h2>
          <p>
            Acesse as informações e descubra tudo que o ReparoRápido pode te
            oferecer
          </p>
          <Link href="#">Saiba mais</Link>
          <span>
            Aponte a câmera do celular e <span>saiba mais!</span>
          </span>
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
