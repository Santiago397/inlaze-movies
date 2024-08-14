import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css'

const Navbar = () => {
  return (
    <section className=''>
      <AcUnitIcon />
      <ul>
        <li>Popular</li>
        <li>Now Playing</li>
        <li>Upcoming</li>
        <li>Top Rated</li>
        <li>Favorites</li>
        <li>Saves</li>
      </ul>
      <div>
        <WbSunnyIcon />
        <LogoutIcon />
      </div>
    </section>
  )
}

export default Navbar
