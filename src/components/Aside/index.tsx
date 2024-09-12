import * as S from './styles'

const Aside = () => {
  return (
    <S.AsideContainer>
      <S.Menu>
        <span></span>
        <span></span>
        <span></span>
      </S.Menu>

      <S.MenuContainer>
        <span>+</span> <span className="show">Nova conversa</span>
      </S.MenuContainer>
      <div className='show'>
        <S.MenuList>Recentes</S.MenuList>
        <S.ContainerItemMenu>
          <li>
            <S.LinkMenu href="/Home">Problema na direção</S.LinkMenu>
          </li>
          <li>
            <S.LinkMenu href="/Faq">Bateria não da carga</S.LinkMenu>
          </li>
        </S.ContainerItemMenu>
      </div>
    </S.AsideContainer>
  )
}

export default Aside
