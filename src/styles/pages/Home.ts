import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  padding-bottom: 48px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  svg {
    cursor: pointer;
    width: 80px;
  }
`

export const Menus = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 40px;
`

export const IconBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 12px;
  cursor: pointer;

  .icon {
    width: 24px;
    margin: 0 8px;
  }

  .title {
    color: rgb(249, 249, 249);
    font-family: Avenir-Heavy, sans-serif;
    font-size: 13px;
    text-transform: uppercase;
  }
`

export const Profile = styled(Header)`
  margin-left: auto;

  .profile {
    height: 48px;
    width: 48px;
    border-radius: 24px;
    cursor: pointer;
  }
`
export const Slider = styled.div`
  margin-top: 45px;

  .card {
    position: relative;
  }

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition-delay: 2s;
  }

  li.slide {
    background: transparent !important;
  }

  .slide {
    padding-left: 20px !important;
  }

  .card {
    width: 1240px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
  }
`

export const MenusBody = styled.div`
  margin-top: 32px;
  width: 100%;
`

export const CategorieBox = styled.section`
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Categorie = styled.div`
  width: calc(20% - 20px);
  margin-left: -27px;
  background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42)) 0% 0% / cover;

  border-radius: 10px;
  border: 2px solid #42444f;
  box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`

export const CategorieItem = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: relative;
  }

  video {
    position: absolute;
    border: solid 4px;
    border-radius: 10px;
    opacity: 0;
    z-index: 0;
    top: 0px;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  ${Categorie}:hover & video {
    opacity: 1;
  }
`

export const MovieContainer = styled.div`
  margin-left: 6px;

  .carousel .slide {
    background: transparent;
  }
`
export const TitleMovie = styled.h4`
  margin-top: 48px;
  margin-left: 4px;
  padding: 0 44px;
  font-size: 18px;
  margin-bottom: 15px;
`

export const CarouselMovies = styled.div`
  margin-left: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  img {
    margin-right: 15px;
    width: 300px;
    border-radius: 8px;
    cursor: pointer;
  }
`
