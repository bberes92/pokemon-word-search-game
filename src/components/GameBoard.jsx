import { useState } from "react";
import "./GameBoard.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function GameBoard() {

    const [currentSelectedWord, setCurrentSelectedWord] = useState(""); 

    const board = [
        ["A", "C", "H", "A", "R", "I", "Z", "A", "R", "D"],
        ["P", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        ["I", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        ["K", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        ["C", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        ["H", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        ["U", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
        ["A", "B", "C", "D", "P", "I", "D", "G", "E", "Y"]
    ];

    const wordsToFind = ["CHARIZARD", "PIDGEY", "PIKACHU"]; 

    function cellClicked(val) {
        setCurrentSelectedWord(`${currentSelectedWord}${val}`);
    }

    function wordSubmit() {
        wordsToFind.forEach((word) => {
            if(word == currentSelectedWord){
                console.log("Match")
            }
        })
    }

    return (
        <div>
        <Table bordered size="sm" variant="dark">
            <tbody>
                {board.map((row) => {
                    return (
                        <tr>
                            {row.map((letter) => {
                                return (
                                    <td onClick={()=>{cellClicked(letter)}}>{letter}</td>
                                )
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
        <p>{wordsToFind}</p>
        <h1>{currentSelectedWord}</h1>
        <Button onClick={() => {wordSubmit()}}>Submit</Button>
        </div>
    )
}

export default GameBoard;