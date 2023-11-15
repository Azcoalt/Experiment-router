import {Link} from '../Link';

export default function HomePage () {
    return(
      <>
        <h1>HomePage</h1>
        <p>Esta es una pagina de ejemplo para crear un React Router desde cero</p>
        {/*<a href='/about'>Ir a sobre nosotros</a>*/}
        <Link to='/about'>Ir a sobre nosotros</Link>
      </>
    )
  }