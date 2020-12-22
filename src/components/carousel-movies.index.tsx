import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import CategoriesMovieList from '../datas/movies'
import {
  MovieContainer,
  TitleMovie,
  CarouselMovies
} from '../styles/pages/Home'

const CarouselMoviesComponent: React.FC = () => {
  return (
    <>
      <MovieContainer>
        {CategoriesMovieList.map((movieList, index) => (
          <div key={index}>
            <TitleMovie>{movieList.title}</TitleMovie>
            <Carousel
              className="carousel"
              autoPlay={false}
              centerMode
              centerSlidePercentage={99.6}
              width="100%"
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
            >
              <CarouselMovies key={index}>
                {movieList.list.map((movie, i) => (
                  <img key={i} src={movie.src} alt={movie.alt} />
                ))}
              </CarouselMovies>

              <div />
            </Carousel>
          </div>
        ))}
      </MovieContainer>
    </>
  )
}

export default CarouselMoviesComponent
