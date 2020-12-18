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
            <img src={DisneyCard} alt="" />
          </div>

          <div className="categorie">
            <img src={PixarCard} alt="" />
          </div>

          <div className="categorie">
            <img src={MarvelCard} alt="" />
          </div>

          <div className="categorie">
            <img src={StarWarsCard} alt="" />
          </div>

          <div className="categorie">
            <img src={NationalCard} alt="" />
          </div>
        </section>
      </MenusFixeds>
    </Container>
  )
}

export default Home
