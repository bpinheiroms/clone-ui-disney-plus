import React from 'react'
import Head from 'next/head'

import { Container, Header, Menus, Profile, Slider } from '../styles/pages/Home'
import DisneyLogo from '../assets/icons/logo.svg'
import MenusButton from '../components/menus-button.index'
import ProfileImage from '../../public/woody_profile.jpg'
import CarouselComponent from '../components/carousel.index'

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
    </Container>
  )
}

export default Home
