import './App.css'
import ferrari from "./img/Ferrari-Logo.png"
import redBull from "./img/redbull.jpeg"
import alfaRomeo from "./img/alfaromeo.jpeg"
import alphatTauri from "./img/alphatauri.jpeg"
import alpine from "./img/alpine.jpeg"
import astonMartin from "./img/AstonMartin.jpg"
import haas from "./img/haas.jpeg"
import mclaren from "./img/mclaren.jpeg"
import mercedes from "./img/mercedes.jpeg"
import williams from "./img/williams.jpeg" 

import { useState } from 'react'

function App() {

  const [teams, setTeams] = useState([
    {name: "RedBull", img: redBull, state: false},
    {name: "Ferrari", img: ferrari, state: false},
    {name: "Mercedes", img: mercedes, state: false},
    {name: "Alfa Romeo", img: alfaRomeo, state: false},
    {name: "Alpha Tauri", img: alphatTauri, state: false},
    {name: "Alpine", img: alpine, state: false},
    {name: "Aston Martin", img: astonMartin, state: false},
    {name: "Haas", img: haas, state: false},
    {name: "Mclaren", img: mclaren, state: false},
    {name: "Williams", img: williams, state: false}
  ]
  )

  const [score, setScore] = useState(0)

  const Card = ({ name, img, state }) => {
    return(
      <div className='card' onClick={() => updateState(name, img, state)}>
        <img className='card-logo' src={img} alt={name}></img>
        <div className='card-name'>{name}</div>
      </div>
    )
  }

  const updateState = (name, img, state) => {
    checkIfLost(state)

    const newState = teams.map(e => name === e.name ? { name, img, state: !state  } : e)
    
    const scorelog = newState.filter(e => e.state === true)

    setScore(scorelog.length)

    setTeams(newState) 
  } 

  const checkIfLost = (state) => {
    if(state){
      alert("you have lost")
    }
  }

  return (
    <div className="App">
      <h1 className='title'>Memory Game</h1>
      <p>{score}</p>
      <div className="grid">
        {teams.map(e => <Card key={e.name} name={e.name} img={e.img} state={e.state}/>)}
      </div>
    </div>
  )
}

export default App;
