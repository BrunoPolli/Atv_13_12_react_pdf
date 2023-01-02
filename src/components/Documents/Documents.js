import { Link } from 'react-router-dom';
import styles from './Documents.module.css';
import docs from './docs';

const Documents = () => {
  return (
    <div className={styles.container}>
      {docs.map(doc => {
        return (
          <div className={styles.docContainer}
          key={doc.id}
          >
            <div className={styles.docName}>
              <Link to='/read' state={{id: doc.id}} className={styles.button}>{doc.title}</Link>
              <span>Ler PDF</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Documents;