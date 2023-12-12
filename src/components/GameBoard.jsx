function GameBoard() {

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

    const wordsToFind = ["Charizard ", "Pidgey ", "Pikachu"]; 

    function cellClicked(val) {
        console.log(`Cell VALUE IS ${val}`);
    }

    return (
        <div>
        <table>
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
        </table>
        <p>{wordsToFind}</p>
        </div>
    )
}

export default GameBoard;