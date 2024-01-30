import profile from '../images/profile.jpeg';

function Header() {
  return(
    <header className="App-header">
      <img src={profile} className='profile-picture' alt='Nasthias profile'/>
    </header>
  )
}

export default Header;