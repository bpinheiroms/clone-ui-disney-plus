import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Homepage</h1>
      <p>Pagina Inicial</p>
    </Container>
  )
}

export default Home
