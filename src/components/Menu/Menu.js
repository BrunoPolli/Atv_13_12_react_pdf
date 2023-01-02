import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  return(
    <div>
      <div className={styles.menu}>
        <Link to="/" className={styles.button}>Home</Link>
        <Link to="/trabalhos" className={styles.button}>Trabalhos</Link>
      </div>
  </div>
  )
}

export default Menu;