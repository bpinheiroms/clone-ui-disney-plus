import AladdinMovie from '../../public/movies/aladdin.jpeg'
import CapitaMarvelMovie from '../../public/movies/capita-marvel.jpeg'
import CloneStarWarsMovie from '../../public/movies/clone-star-wars.jpeg'
import HorasDecisivasMovie from '../../public/movies/horas-decisivas.jpeg'
import MundoSecretoMovie from '../../public/movies/mundo-secreto.jpeg'
import TogoMovie from '../../public/movies/togo.jpeg'

const CategoriesMovieList: any[] = [
  {
    title: 'Recomendado para Você',
    list: [
      {
        alt: 'aladdin movie',
        src: AladdinMovie
      },
      {
        alt: 'capita marvel movie',
        src: CapitaMarvelMovie
      },
      {
        alt: 'clone star wars movie',
        src: CloneStarWarsMovie
      },
      {
        alt: 'horas decisivas movie',
        src: HorasDecisivasMovie
      },
      {
        alt: 'mundo secreto movie',
        src: MundoSecretoMovie
      },
      {
        alt: 'togo movie',
        src: TogoMovie
      }
    ]
  }
]

export default CategoriesMovieList;
