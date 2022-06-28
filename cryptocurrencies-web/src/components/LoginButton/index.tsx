import { Button, GithubLogo, GoogleLogo, SignInText } from "./styles"

type Props = {
  onClick: () => void
  authServiceName: string
  githubLogo: string
  googleLogo: string
}

const LoginButton = ({ onClick, authServiceName, githubLogo, googleLogo }: Props) => {
  return (
    <Button onClick={() => onClick()}>
      <GithubLogo src={GithubLogo} alt='Github' />
      <SignInText>Entrar com Github</SignInText>
      <GoogleLogo src={GoogleLogo} alt='Google' />
      <SignInText>Entrar com Google</SignInText>
    </Button>
  )
}

export default LoginButton