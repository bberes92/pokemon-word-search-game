function WordsList ({words}) {

    return(
        <>
        {words.map((word) => {
            if(!word["isFounded"]){return (<p>{word["word"]}</p>)}
            else{return (<p className="line-through">{word["word"]}</p>)}
        })}
        </>
    )
}

export default WordsList;