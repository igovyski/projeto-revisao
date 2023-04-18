import './Tabela.css'

export default function Tabela(){
    return(
    <>
    <h2>Proximos Jogos</h2>
    
    <table>
        <tr>
        <th>Data</th>
        <th>Horário</th>
        <th>Partida</th>
        <th>Local</th>
      </tr>
      <tr>
        <td>19/04</td>
        <td>21h30</td>
        <td>Corinthians x Argentinos Jr.</td>
        <td>Neo Quimica Arena</td>
      </tr>
      <tr>
        <td>23/04</td>
        <td>19h00</td>
        <td>Goias x Corinthians</td>
        <td>Serrinha</td>
      </tr>
      <tr>
        <td>26/04</td>
        <td>21h30</td>
        <td>Corinthians X Remo</td>
        <td>Neo Quimica Arena</td>
      </tr>
      <tr>
        <td>29/04</td>
        <td>21h30</td>
        <td>Palmeiras X Corinthians</td>
        <td>Chiqueirão</td>
      </tr>
    </table>
    </>
    )
  }