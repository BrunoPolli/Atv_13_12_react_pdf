import styles from './Header.module.css';
import logo from '../../images/logo.JPG';

const Header = () => {
  return(
    <div style={{flex: 1}}>
      <div className={styles.logoContainer}>
        <img src={logo} alt='logo-ifpr'/>
      </div>

    </div>
  )
}

export default Header;