import React from 'react'
import HeroImageCSS from './HeroImage.module.css'
import Typed from 'typed.js';


export default function HeroImage(props) {
  const image = props.image;
  const imageCSS = {
    background: `url(${image}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
  };

  // const title = props.title | "test title";
  const title = props.title;


  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>First</i> sentence.', '&amp; a second sentence.', `${title}`],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  

  return (
    <div className={HeroImageCSS.heroImageContainer} style={imageCSS}>
        <div className={HeroImageCSS.overlayCSS}>
        <span ref={el} className={HeroImageCSS.textAnimation}/>
        </div>
    </div>
  )
}
