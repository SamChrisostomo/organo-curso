import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './colaborador.css'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    const favoritar = () => {
        aoFavoritar(colaborador.id)
    }

    const propsFavIcons = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <AiFillCloseCircle className='deletar' onClick={() => aoDeletar(colaborador.id)} size={25} />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart {...propsFavIcons} color='#ff0000' />
                        : <AiOutlineHeart {...propsFavIcons} />}
                </div>
            </div>
        </div>
    )
}

export default Colaborador