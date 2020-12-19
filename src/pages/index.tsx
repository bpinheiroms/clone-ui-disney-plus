import React from 'react'
import Head from 'next/head'
import MenusFixedsComponent from '../components/menus-fixeds.index'
import CarouselMoviesComponent from '../components/carousel-movies.index'
import {
  Container,
  Header,
  Menus,
  Profile,
  Slider,
  MenusBody
} from '../styles/pages/Home'
import DisneyLogo from '../assets/icons/logo.svg'
import MenusButton from '../components/menus-button.index'
import ProfileImage from '../../public/woody_profile.jpg'
import CarouselBannerComponent from '../components/carousel-banner.index'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Disney+ | Filmes e séries</title>
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
        <CarouselBannerComponent />
      </Slider>
      <MenusBody>
        <MenusFixedsComponent />
        <CarouselMoviesComponent />
      </MenusBody>
    </Container>
  )
}

export default Home
