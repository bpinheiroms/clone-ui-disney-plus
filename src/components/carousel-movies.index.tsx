import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import CategoriesMovieList from '../datas/movies'
import { MovieContainer } from '../styles/pages/Home'

const CarouselMoviesComponent: React.FC = () => {
  return (
    <>
      <MovieContainer>
        {CategoriesMovieList.map((movieList, index) => (
          <>
            <h4>{movieList.title}</h4>
            <Carousel
              key={index}
              className="carousel"
              autoPlay={false}
              centerMode
              centerSlidePercentage={99.6}
              width="100%"
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
            >
              <div className="carousel-movies">
                {movieList.list.map((movie, i) => (
                  <div className="movieImg">
                    <img src={movie.src} alt={movie.alt} />
                  </div>
                ))}
              </div>

              <div />
            </Carousel>
          </>
        ))}
      </MovieContainer>
    </>
  )
}

export default CarouselMoviesComponent
