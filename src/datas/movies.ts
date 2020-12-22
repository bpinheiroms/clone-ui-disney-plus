import AladdinMovie from '../../public/movies/aladdin.jpeg'
import CapitaMarvelMovie from '../../public/movies/capita-marvel.jpeg'
import CloneStarWarsMovie from '../../public/movies/clone-star-wars.jpeg'
import HorasDecisivasMovie from '../../public/movies/horas-decisivas.jpeg'
import MundoSecretoMovie from '../../public/movies/mundo-secreto.jpeg'
import TogoMovie from '../../public/movies/togo.jpeg'

import StarWarsMovie from '../../public/movies/star-wars.jpeg'
import GuardioesGalaxiaMovie from '../../public/movies/guardioes-galaxia.jpeg'
import HomemFerroMovie from '../../public/movies/homem-de-ferro.jpeg'
import HomemFormigaVespaMovie from '../../public/movies/homem-formiga-vespa.jpeg'
import MarMonstroMovie from '../../public/movies/mar-de-monstro.jpeg'
import PanteraNegraMovie from '../../public/movies/pantera-negra.jpeg'
import VingadoresMovie from '../../public/movies/vingadores.jpeg'

import FrozenIIMovie from '../../public/movies/frozen-II.jpeg'
import IncriveisIIMovie from '../../public/movies/incriveis-II.jpeg'
import ReiLeaoMovie from '../../public/movies/rei-leao.jpeg'
import AvatarMovie from '../../public/movies/avatar.jpeg'
import StarWarsDespertarMovie from '../../public/movies/star-wars-despertar.jpeg'
import VingadoresGuerraInfinitaMovie from '../../public/movies/vingadores-guerra-infinita.jpeg'

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
  },
  {
    title: 'Ação e Aventura',
    list: [
      {
        alt: 'star wars movie',
        src: StarWarsMovie
      },
      {
        alt: 'guardioes da galaxia movie',
        src: GuardioesGalaxiaMovie
      },
      {
        alt: 'homem de ferro movie',
        src: HomemFerroMovie
      },
      {
        alt: 'homem formiga e mulher vespa movie',
        src: HomemFormigaVespaMovie
      },
      {
        alt: 'mar de monstro movie',
        src: MarMonstroMovie
      },
      {
        alt: 'pantera negra movie',
        src: PanteraNegraMovie
      },
      {
        alt: 'vingadores movie',
        src: VingadoresMovie
      }
    ]
  },
  {
    title: 'Sucesso de Bilheteria',
    list: [
      {
        alt: 'vingadores guerra infinita movie',
        src: VingadoresGuerraInfinitaMovie
      },
      {
        alt: 'star wars o despertar da força movie',
        src: StarWarsDespertarMovie
      },
      {
        alt: 'avatar movie',
        src: AvatarMovie
      },
      {
        alt: 'rei lao movie',
        src: ReiLeaoMovie
      },
      {
        alt: 'os incriveis 2 movie',
        src: IncriveisIIMovie
      },
      {
        alt: 'frozen 2 movie',
        src: FrozenIIMovie
      },
    ]
  }
]

export default CategoriesMovieList;
