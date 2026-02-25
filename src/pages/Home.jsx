import SlideShow from "../components/SlideShow"

export default function Home () {

return (
     <div className='home-page'>
             <div className="quote-box">
                     <h2 className="quote">
                         "There's no retirement for an artist,
                         it's your way of living so there's no end to it."
                     </h2>
                     <p className="quote-author"> – Henry Moore</p>
             </div>
             <SlideShow />
     </div>
    )
}