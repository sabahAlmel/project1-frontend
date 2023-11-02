
import Card from '../cardComponent/Card'
import styles from './HotelContainer.module.css'

export default function HotelContainer() {
  return (
    <div className={styles.card}>
        <Card />
        <Card />
        <Card />
    </div>
)
}

