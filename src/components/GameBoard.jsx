import { useState } from "react";
import "./GameBoard.css"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

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

    function cellClicked(e, key) {
        console.log(key);
        setCurrentSelectedWord(`${currentSelectedWord}${e.target.dataset.value}`);
        e.target.style.color = "green";
        //e.target.style.textDecoration="line-through";

    }

    function wordSubmit() {
        if(wordsToFind.includes(currentSelectedWord)) {
            alert("Nice! Match Founded!");
            setCurrentSelectedWord("");
        }
        else {
            alert("Wrong Word!");
            setCurrentSelectedWord("");
        }
    }

    return (
        <Container>
        <Table size="sm" variant="dark">
            <tbody>
                {board.map((row) => {
                    return (
                        <tr>
                            {row.map((letter, index) => {
                                return (
                                    <td className="board-cell" key={index} data-value={letter} onClick={(e)=>{cellClicked(e, index)}}>{letter}</td>
                                )
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </Table>
        <Button onClick={() => {wordSubmit()}}>Submit</Button>
        {wordsToFind.map((word) => {
            return (<p>{word}</p>)
        })}
        <h1>{currentSelectedWord}</h1>
        </Container>
    )
}

export default GameBoard;