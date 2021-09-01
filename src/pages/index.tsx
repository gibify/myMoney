import styles from '../styles/Home.module.scss'

import { TransactionCards } from '../components/TransactionCards';

export default function Home() {
  return (
    <div className={styles.content}>
      <TransactionCards />
    </div>
  )
}
