import { useState, useEffect } from "react";
import "./GameBoard.css"
import * as pokemons from "../pokemons.json";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function GameBoard() {

    const [wordsToFind, setWordsToFind] = useState([]);
    let currentSelectedWord = "";
    const pokemonsList = pokemons["default"];
    const min = Math.ceil(0);
    const max = Math.floor(51);

    useEffect(() => {
        for(let i = 0; i < 2; i++) {
            let currID = Math.floor(Math.random() * (max - min) + min);
            let name = (pokemonsList[currID]["name"]).toUpperCase();
            let newWord = {"word" : name, "isFounded" : false};
            setWordsToFind((words) => [...words, newWord]);
        }
      }, []);

    

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

    function cellClicked(e, key) {
        console.log(key);
        currentSelectedWord = `${currentSelectedWord}${e.target.dataset.value}`;
        e.target.style.color = "green";
    }

    function wordSubmit() {
        wordsToFind.forEach((item) => {
            if(item["word"] == currentSelectedWord) {
                alert("Nice! Match Founded!");
                item["isFounded"] = true;
                currentSelectedWord = "";
            }
        })
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
            if(!word["isFounded"]){return (<p>{word["word"]}</p>)}
            else{return (<p className="line-through">{word["word"]}</p>)}
        })}
        <h1>{currentSelectedWord}</h1>
        </Container>
    )
}

export default GameBoard;