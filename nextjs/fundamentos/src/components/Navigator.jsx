import Link from 'next/link';
import styles from '../styles/Navigator.module.css';

export default function Navigator(props) {
  const { to, text, color } = props;
  return (
    <Link href={to}>
      <a className={styles.navigator} style={{
        backgroundColor: color ?? 'dodgerblue'
      }}>
        {text}
      </a>
    </Link>
  )
}