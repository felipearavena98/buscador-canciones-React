import Formulario from './Formulario'
import Alerta from './Alerta'
import useLetras from '../hooks/useLetras'
import Letra from './Letra'

const AppLetras = () => {

    const { alerta, letra, cargando } = useLetras()

    return (
        <>
            <header>Búsqueda de Letras de Canciones</header>
            <Formulario />
            <main>
                {alerta ? <Alerta>{alerta}</Alerta> : letra ? <Letra /> : cargando ? 'Cargando...' : <p className='text-center'>Búsca Letras de tus artistas Favoritos</p>}
            </main>
        </>
    )
}

export default AppLetras