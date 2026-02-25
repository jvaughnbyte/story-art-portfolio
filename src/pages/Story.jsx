
export default function Story () { 
    
    const boards = [ 
        "https://speakerdeck.com/player/f2270fe2420a45d1bb7949a668505074", 
        "https://speakerdeck.com/player/b8da515922c44a5d932e85917b7b274a", 
        "https://speakerdeck.com/player/ad2490e3796343f28e8922ff4ebe1988" 
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