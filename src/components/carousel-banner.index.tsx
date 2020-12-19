import React from 'react'
import SoulImage from '../../public/image1.jpeg'
import SoulLogo from '../../public/logo1.png'
import MogliImage from '../../public/image4.jpeg'
import MogliLogo from '../../public/logo4.png'
import MulanImage from '../../public/image3.jpeg'
import MulanLogo from '../../public/logo3.png'
import { Carousel } from 'react-responsive-carousel'

const CarouselBannerComponent: React.FC = () => {
  return (
    <Carousel
      className="carousel"
      autoPlay={true}
      centerMode
      centerSlidePercentage={95}
      width="100%"
      showThumbs={false}
      infiniteLoop={true}
      showStatus={false}
    >
      <div className="slideGroup" >
        <img className="card" src={SoulImage} alt="mandalorian card" />
        <img className="logo" src={SoulLogo} alt="avengers endgame card" />
      </div>
      <div>
        <img className="card" src={MogliImage} alt="mandalorian card" />
        <img className="logo" src={MogliLogo} alt="avengers endgame card" />
      </div>
      <div>
        <img className="card" src={MulanImage} alt="mandalorian card" />
        <img className="logo" src={MulanLogo} alt="avengers endgame card" />
      </div>
    </Carousel>
  )
}

export default CarouselBannerComponent
