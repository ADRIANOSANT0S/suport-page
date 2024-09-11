import { ButtonContainer } from './styles'

export type Props = {
  size: 'small' | 'big'
  children: JSX.Element | string
  type?: 'submit' | 'button'
}

const Button = ({ size = 'small', children, type }: Props) => {
  return (
    <ButtonContainer size={size} type={type}>
      {children}
    </ButtonContainer>
  )
}

export default Button
