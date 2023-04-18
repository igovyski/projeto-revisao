import './App.css'
import Header from './components/Header'
import Textos from './components/Textos'
import Tabela from './components/Tabela'
import Listas from './components/Listas'

export default function App(){
  return(
    <>
    <Header />
    <main>
      <Textos />
      <Tabela />
      <Listas />
    </main>
    </>
  )
}