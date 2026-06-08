import Die from "./Die";
import { useState } from "react";
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

export default function Main(){

    const [dice, setDice] = useState(() => generateAllNewDice())

    const gameWon = dice.every(die => die.isHeld && die.value === dice[0].value)

    function generateAllNewDice(){
        const newDice = []

        for(let i=0; i<10; i++){
            let val = Math.ceil(Math.random() * 6)
            newDice.push({
                value: val,
                isHeld: false,
                id: nanoid()
            })
        }

        return newDice
    }

    function rollDice(){
        if(gameWon){
            setDice(generateAllNewDice())
        }
        else{
            setDice(oldDice => {
                return (oldDice.map(die => {
                    return die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
                }))
            })
        }
    }

    function hold(id){
        setDice(oldDice => {
            return (oldDice.map(die => {
                return die.id === id ? {...die, isHeld: !die.isHeld} : die
            }))
        })
    }

    const diceElement = dice.map(diceObj => 
        <Die 
            key={diceObj.id} 
            value={diceObj.value} 
            isHeld={diceObj.isHeld}
            id={diceObj.id}
            hold={hold}
        />)
    
    return (
        <main>
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElement}
            </div>

            <button className="roll-dice" onClick={rollDice}>{gameWon ? "New Game" : "Roll"}</button>
        </main>
    )
}