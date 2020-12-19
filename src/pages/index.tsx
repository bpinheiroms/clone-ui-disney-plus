import React from 'react'
import Head from 'next/head'

import {
  Container,
  Header,
  Menus,
  Profile,
  Slider,
  MenusFixeds
} from '../styles/pages/Home'
import DisneyLogo from '../assets/icons/logo.svg'
import MenusButton from '../components/menus-button.index'
import ProfileImage from '../../public/woody_profile.jpg'
import CarouselComponent from '../components/carousel.index'

import DisneyCard from '../../public/fixeds/disney.png'
import MarvelCard from '../../public/fixeds/marvel.png'
import NationalCard from '../../public/fixeds/national.png'
import PixarCard from '../../public/fixeds/pixar.png'
import StarWarsCard from '../../public/fixeds/starwars.png'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Header>
        <DisneyLogo />
        <Menus>
          <MenusButton />
          <Profile>
            <img className="profile" src={ProfileImage} alt="profile" />
          </Profile>
        </Menus>
      </Header>
      <Slider>
        <CarouselComponent />
      </Slider>
      <MenusFixeds>
        <section className="categories-box">
          <div className="categorie">
            <div className="categorieItem">
              <img src={DisneyCard} alt="disney card" />
              <video className="hover-image" autoPlay muted loop>
                <source
                  src="https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="categorie">
            <div className="categorieItem">
              <img src={PixarCard} alt="pixar card" />
              <video className="hover-image" autoPlay muted loop>
                <source
                  src="https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676714-pixar.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="categorie">
            <div className="categorieItem">
              <img src={MarvelCard} alt="marvel card" />
              <video className="hover-image" autoPlay muted loop>
                <source
                  src="https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="categorie">
            <div className="categorieItem">
              <img src={StarWarsCard} alt="star wars card" />
              <video className="hover-image" autoPlay muted loop>
                <source
                  src="https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/04/03/1585929840-star-wars.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          <div className="categorie">
            <div className="categorieItem">
              <img src={NationalCard} alt="national card" />
              <video className="hover-image" autoPlay muted loop>
                <source
                  src="https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676296-national-geographic.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>
      </MenusFixeds>
    </Container>
  )
}

export default Home
