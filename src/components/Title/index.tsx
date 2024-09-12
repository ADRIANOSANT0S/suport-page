import { ElementType } from 'react'
import { TitleContainer } from './styles'

type Props = {
  children: string
  as: ElementType
}

const Title = ({ children, as }: Props) => (
  <TitleContainer as={as}>{children}</TitleContainer>
)

export default Title
