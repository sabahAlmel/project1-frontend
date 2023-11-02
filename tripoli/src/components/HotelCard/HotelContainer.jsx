
import Card from '../cardComponent/Card'
import styles from './HotelContainer.module.css'

export default function HotelContainer(props) {
  const element = props.element;
  return (
    <div className={styles.card}>
      <Card data={element}/>
    </div>
)
}

