import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {

  return (
    <>
      <header>
        <nav>
          <ul>
            <NavLink to='/' >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/contact' >Contact</NavLink>
            <NavLink to='/help' >Help</NavLink>
            <NavLink to='./form' >Form</NavLink>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header