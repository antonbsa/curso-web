import styles from '../styles/Styled.module.css';
import Layout from '../components/Layout';

export default function Styled() {
  return (
    <Layout>
      <div className={styles.roxo}>
        <h1>Style using CSS modules</h1>
      </div>
    </Layout>
  )
}
