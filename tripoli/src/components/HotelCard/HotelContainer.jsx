
import Card from '../cardComponent/Card'
import styles from './HotelContainer.module.css'

export default function HotelContainer(props) {
  
  const elementArray = props.elementArray;
  // console.log(element)
  return (
    <div className={styles.card}>
      { elementArray.map((ele)=>{
        // {console.log("to the card", ele)}
       return <Card data={ele}/>
        // {console.log("after the card", ele)}
      })}
      
    </div>
)
}

