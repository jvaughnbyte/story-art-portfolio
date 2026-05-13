
export default function Story () { 
    
    const boards = [ 
        "https://speakerdeck.com/player/f2270fe2420a45d1bb7949a668505074" , 
        "https://speakerdeck.com/player/b8da515922c44a5d932e85917b7b274a" , 
        "https://speakerdeck.com/player/ad2490e3796343f28e8922ff4ebe1988" ,
        "https://speakerdeck.com/player/23bffe754abd4cac8976cfdaed89a2ea" ,
        "https://speakerdeck.com/player/204acbb8975c4eec95a79d4c89232ecc" , 
        "https://speakerdeck.com/player/c4705b2c4199466bbc0a7aa3cd9f417c"
    ] 

    
    
    return ( 
    <div className='story-page'> 
        <div className="board-box"> 
            {boards.map((board, index) => ( 
                <iframe className="board" 
                    key={index} 
                    src={board} 
                    allowFullScreen 
                    title={`Storyboard ${index + 1}`}
                /> 
            ))} 
        </div> 
    </div> 
    )}