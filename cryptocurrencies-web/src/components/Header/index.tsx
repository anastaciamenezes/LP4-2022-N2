import { useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { AppTitle, HeaderBar, ProfileName, ProfilePic, SignOutButton, SignOutIcon } from "./styles"
import logout from '../../assets/img/logout.png'
import { getAuth } from "firebase/auth"
import firebaseApp from '../../config/firebase'
import { useNavigate } from "react-router-dom"

const Header = () => { 
  const { profilePic, userName, setToken, setProfilePic, setUserName } =
    useContext(UserContext)

  const navigate = useNavigate()
  
  const doSignOut = () => {
    const auth = getAuth(firebaseApp)
    auth
      .signOut()
      .then(() => {
        setToken('')
        setUserName('')
        setProfilePic('')
        navigate('/login')
      })
      .catch((error) => console.log(error))
  }
  
  return (
    <HeaderBar>
      <AppTitle>Cryptocurrencies-web</AppTitle>
      <ProfilePic src={profilePic} alt={`Foto de ${userName}`} />
      <ProfileName>{userName}</ProfileName>
      <SignOutButton onClick={() => doSignOut}>
        <SignOutIcon src={logout} alt='Sair' />
      </SignOutButton>
    </HeaderBar>

  )
}

export default Header