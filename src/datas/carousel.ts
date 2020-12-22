import SoulImage from '../../public/image1.jpeg'
import SoulLogo from '../../public/logo1.png'
import MogliImage from '../../public/image4.jpeg'
import MogliLogo from '../../public/logo4.png'
import MulanImage from '../../public/image3.jpeg'
import MulanLogo from '../../public/logo3.png'

const CarouselList: any[] = [
  {
    card: {
      src: SoulImage,
      alt: 'soul card'
    },
    logo: {
      src: SoulLogo,
      alt: 'soul logo card'
    }
  },
  {
    card: {
      src: MogliImage,
      alt: 'mogli card'
    },
    logo: {
      src: MogliLogo,
      alt: 'mogli logo card'
    }
  },
  {
    card: {
      src: MulanImage,
      alt: 'mulan card'
    },
    logo: {
      src: MulanLogo,
      alt: 'mulan logo card'
    }
  }
]

export default CarouselList
