'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../Button'

import * as S from './styles'

interface FormValues {
  login: string
  password: string
}

const Form = () => {
  const router = useRouter()

  const formik = useFormik<FormValues>({
    initialValues: {
      login: '',
      password: ''
    },
    validationSchema: Yup.object({
      login: Yup.string().required('CPF ou e-mail é obrigatório'),
      password: Yup.string().required('Senha é obrigatória')
    }),
    onSubmit: (values) => {
      // Usuário teste para redirecionar para a página Home do site.
      if (
        values.login === '014.870.320-80' &&
        values.password === 'Bilionário'
      ) {
        router.push('/Home')
      } else {
        alert('Usuário não identificado. Cadastre ou redefina usuário.')

        //Limpa os campos apos fechar o alert
        formik.setFieldValue('login', '')
        formik.setFieldValue('password', '')
      }
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in formik.touched
    const isInvalid = fieldName in formik.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <S.InputGroup className={checkInputHasError('login') ? 'error' : ''}>
        <S.Label htmlFor="login">CPF ou e-mail</S.Label>
        <S.Input
          type="text"
          name="login"
          id="login"
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </S.InputGroup>
      <S.InputGroup className={checkInputHasError('password') ? 'error' : ''}>
        <S.Label htmlFor="password">senha</S.Label>
        <S.Input
          type="text"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </S.InputGroup>
      <S.TextRight>
        <Link href="/Home" className="color-blue">
          Esqueci minha senha
        </Link>
      </S.TextRight>
      <Button size="big" type="submit" onClick={formik.handleSubmit}>
        Entrar
      </Button>
    </form>
  )
}

export default Form
