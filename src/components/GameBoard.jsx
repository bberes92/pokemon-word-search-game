import { useState, useEffect } from "react";
import "./GameBoard.css"
import * as pokemons from "../pokemons.json";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import WordsList from "./WordsList";

function GameBoard() {

    const [wordsToFind, setWordsToFind] = useState([]);
    let currentSelectedWord = "";
    let numOfWordsToFind = 1;
    

    useEffect(() => {
        newGame();
      }, []);

     const gameBoard = [
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

    function newGame() {

        const pokemonsList = pokemons["default"];
        const min = Math.ceil(0);
        const max = Math.floor(26);

        setWordsToFind([]);
        
        for(let i = 0; i < 1; i++) {
            let currID = Math.floor(Math.random() * (max - min) + min);
            let name = (pokemonsList[currID]["name"]).toUpperCase();
            let newWord = {"word" : name, "isFounded" : false};
            setWordsToFind((words) => [...words, newWord]);
        }
    }

    function cellClicked(e, key) {
        console.log(key);
        currentSelectedWord = `${currentSelectedWord}${e.target.dataset.value}`;
        e.target.style.color = "green";
    }

    function wordSubmit() {
        for(let [index, entry] of wordsToFind.entries()) {
            if(entry["word"] == currentSelectedWord) {
                alert("Nice! Match Founded!");
                const newState = [...wordsToFind];
                    newState[index] = { 
                        ...newState[index],
                        isFounded: true,
                    }
                setWordsToFind(newState);
                currentSelectedWord = "";
                numOfWordsToFind -= 1;
                if(numOfWordsToFind == 0) {
                    alert("Nice! All Founded!");
                    newGame();
                }

            }
        }
    }

    return (
        <Container>
        <Table size="sm" variant="dark">
            <tbody>
                {gameBoard.map((row) => {
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
        {wordsToFind && (<WordsList words={wordsToFind}/>)}
        </Container>
    )
}

export default GameBoard;