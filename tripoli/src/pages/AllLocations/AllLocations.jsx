import React, { useState } from 'react'
import Button from '../../components/buttonLocation/Button'
import HeroImage from '../../components/heroImage/HeroImage'
import heroTestImage from '../../components/heroImage/tripoli.jpg'
import ContainerLocation from '../../components/containerLocation/ContainerLocation'

export default function AllLocations(props) {

    const [whichButtonClicked, setWhichButtonClicked] = useState("");

    const api = props.api;
    let idOne = []
    let idTwo = []
    let idThree = []
    
    const map = api.map((element)=>{
        if(element.id ==1) {
            idOne.push(element)
        } else if(element.id==2){
            idTwo.push(element)
        } else if(element.id==3){
            idThree.push(element)
        }

    })

    if(idOne.length >3){
        idOne = idOne.slice(0,3);
    }
    if(idTwo.length >3){
        idTwo = idTwo.slice(0,3);
    }
    if(idTwo.length >3){
        idThree = idThree.slice(0,3);
    }

    const map2 = idOne.map((element)=>{
       return <ContainerLocation element = {element}></ContainerLocation>
    })
    const map3 = idTwo.map((element)=>{
        return <ContainerLocation element = {element}></ContainerLocation>
     })
     const map4 = idThree.map((element)=>{
        return <ContainerLocation element = {element}></ContainerLocation>
     })

  return (
    <>
    <HeroImage image={heroTestImage}></HeroImage>
    <Button buttonPressed={setWhichButtonClicked}/>
    {whichButtonClicked ? 
    whichButtonClicked == 1 ? 
    
        {map2}
        :
            whichButtonClicked ==2 ?    
                {map3}
            :
            whichButtonClicked ==3 ?
                {map4}
            : null
    
    :  
    <>
    {map2} {map3} {map4}
    </>
    }
    </>
  )
}