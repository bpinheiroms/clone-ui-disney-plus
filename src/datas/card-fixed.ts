import DisneyCard from '../../public/fixeds/disney.png'
import MarvelCard from '../../public/fixeds/marvel.png'
import NationalCard from '../../public/fixeds/national.png'
import PixarCard from '../../public/fixeds/pixar.png'
import StarWarsCard from '../../public/fixeds/starwars.png'

const MenusFixedList: any[] = [
  {
    img: {
      src: DisneyCard,
      alt: 'disney card'
    },
    videoSource:
      'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564674844-disney.mp4'
  },
  {
    img: {
      src: PixarCard,
      alt: 'pixar card'
    },
    videoSource:
      'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676714-pixar.mp4'
  },
  {
    img: {
      src: MarvelCard,
      alt: 'marvel card'
    },
    videoSource:
      'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676115-marvel.mp4'
  },
  {
    img: {
      src: StarWarsCard,
      alt: 'star wars card'
    },
    videoSource:
      'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/04/03/1585929840-star-wars.mp4'
  },
  {
    img: {
      src: NationalCard,
      alt: 'national card'
    },
    videoSource:
      'https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/01/1564676296-national-geographic.mp4'
  }
]

export default MenusFixedList;
