import Timao from '../assets/corinthians.svg'
import Hino from "../assets/corinthians-mp3.mp3"
import './Textos.css'

export default function Textos(){
    return(
    <>
    <div>
        <img src={Timao} className='Timao' />
        
        <p className='a'>Salve o Corinthians</p>
        <p className='b'>O Campeão dos Campeões</p>
        <p className='c'>Eternamente</p>
        <p className='d'>Dentro dos nossos corações</p>

        <audio controls>
        <source src={Hino} type="audio/mp3" />
        </audio>
    </div>
    </>
    )
  }