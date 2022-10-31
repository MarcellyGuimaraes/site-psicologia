import fontawesome from '@fortawesome/fontawesome'
import { faAngleDoubleRight, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Home = () => {
  fontawesome.library.add(faHome)

  return <FontAwesomeIcon icon="house" />
}

export const DoubleRight = () => {
  fontawesome.library.add(faAngleDoubleRight)

  return <FontAwesomeIcon icon="angles-right" />
}
