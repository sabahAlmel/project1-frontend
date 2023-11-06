import React, { useState } from 'react'

export default function ImageSlider(props) {
    const imagesArray = props.images;
    const [imageIndex,setImageIndex] = useState(0);
    
    const leftButtonHandler = ()=>{
        let index;
        if(imageIndex){
           index = imageIndex-1;
        } else {
           index = imagesArray.length - 1;
        }
        setImageIndex(index);  
    }

    const rightButtonHandler = ()=>{
        let index=0;
        if(imageIndex == imagesArray.length-1){
            index = 0;
        } else {
            index = imageIndex+1;
        }
        setImageIndex(index);  
    }

    const mainSlider ={
        height: '100%',
        position: 'relative',
    }

    const imageStyle = {
        backgroundImage: `url(${imagesArray[imageIndex]})`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }
    const leftArrow ={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#fff',
        cursor: 'pointer',
        zIndex: 1,
    }
    const rightArrow ={
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#fff',
        cursor: 'pointer',
        zIndex: 1,
    }
  return (
    <div style={mainSlider}>
        <div onClick={leftButtonHandler} style={leftArrow}>❮</div>
        <div onClick={rightButtonHandler}  style={rightArrow}>❯</div>
        <div style={imageStyle}></div>
       
    </div>

  )
}
