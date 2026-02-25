import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css"
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import img1 from '../assets/10.jpg'
import img2 from '../assets/20.jpg'
import img3 from '../assets/40.jpg'
import img4 from '../assets/50.jpg'
import img5 from '../assets/60.jpg'
import img6 from '../assets/70.jpg'
import img7 from '../assets/80.jpg'
import img8 from '../assets/100.jpg'
import img9 from '../assets/110.jpg'


export default function SlideShow () {
  const [open, setOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

 const slides = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9
  ]

  return (
    <div>
        <div className="thumbnail-grid">
            {slides.map((image, i) => (
                <button 
                    className='thumbnail-btn'
                    onClick={() => {
                        setOpen(true)
                        setCurrentSlide(i)
                    }}
                    key={i} 
                >
                        <img 
                            className='thumbnail-img'
                            src={image} 
                            alt={`Storyboard ${i + 1}`}
                        />
                </button>
            ))}
        </div>
        <Lightbox 
            open={open}
            close={() => {setOpen(false)}}
            index={currentSlide}
            slides={slides.map((src) => ({ src }))}
            plugins={[Thumbnails]}
        />
    </div>
  )
}
