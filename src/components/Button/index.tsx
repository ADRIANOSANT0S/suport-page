import { ButtonContainer } from './styles'

export type Props = {
  size: 'small' | 'big'
  children: JSX.Element | string
  type?: 'submit' | 'button'
  onClick?: () => void
}

const Button = ({ size = 'small', children, type, onClick }: Props) => {
  return (
    <ButtonContainer size={size} type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
