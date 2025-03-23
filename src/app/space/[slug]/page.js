'use client'

// import React, { useState, useEffect, useCallback } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'

// const EmblaCarousel = ({ images }) => {
//   const [selectedIndex, setSelectedIndex] = useState(0)
//   const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
//   const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
//     containScroll: 'keepSnaps',
//     dragFree: true,
//   })

//   const onThumbClick = useCallback(
//     (index) => {
//       if (!embla || !emblaThumbs) return
//       embla.scrollTo(index)
//     },
//     [embla, emblaThumbs]
//   )

//   const onSelect = useCallback(() => {
//     if (!embla || !emblaThumbs) return
//     setSelectedIndex(embla.selectedScrollSnap())
//     emblaThumbs.scrollTo(embla.selectedScrollSnap())
//   }, [embla, emblaThumbs])

//   useEffect(() => {
//     if (!embla) return
//     onSelect()
//     embla.on('select', onSelect)
//   }, [embla, onSelect])

//   return (
//     <div className="embla">
//       {/* Main Carousel */}
//       <div className="embla__viewport" ref={mainViewportRef}>
//         <div className="embla__container">
//           {images.map((src, index) => (
//             <div className="embla__slide" key={index}>
//               <img src={src} alt={`Slide ${index}`} className="embla__slide__img" />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Thumbnails */}
//       <div className="embla-thumbs">
//         <div className="embla-thumbs__viewport" ref={thumbViewportRef}>
//           <div className="embla-thumbs__container">
//             {images.map((src, index) => (
//               <div
//                 key={index}
//                 className={`embla-thumbs__slide ${index === selectedIndex ? 'is-selected' : ''}`}
//               >
//                 <button
//                   onClick={() => onThumbClick(index)}
//                   className="embla-thumbs__slide__button"
//                   type="button"
//                 >
//                   <img
//                     className="embla-thumbs__slide__img"
//                     src={src}
//                     alt={`Thumbnail ${index}`}
//                   />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function SlugPage({ params }) {
//     const images = [
//         'https://picsum.photos/200/300',
//         'https://picsum.photos/200/310',
//         'https://picsum.photos/200/305',
//         // Add more image paths as needed
//       ]

//   return (
//     <div>
//       <EmblaCarousel images={images} />
//     </div>
//   )
// }




// import React from 'react'
// import useEmblaCarousel from 'embla-carousel-react'

// export default function EmblaCarousel({ params }) {
//   const [emblaRef] = useEmblaCarousel()

//   return (
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container">
//         <div className="embla__slide">Slide 1</div>
//         <div className="embla__slide">Slide 2</div>
//         <div className="embla__slide">Slide 3</div>
//       </div>
//     </div>
//   )
// }

// import React, { useCallback, useEffect } from 'react'
// import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'


// export default function EmblaCarousel() {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

//   useEffect(() => {
//     if (emblaApi) {
//       console.log(emblaApi.slideNodes()) // Access API
//     }
//   }, [emblaApi])

//   const scrollPrev = useCallback(() => {
//     if (emblaApi) emblaApi.scrollPrev()
//   }, [emblaApi])

//   const scrollNext = useCallback(() => {
//     if (emblaApi) emblaApi.scrollNext()
//   }, [emblaApi])

//   return (
//     <div className="embla" ref={emblaRef}>
//       <div className="embla__container">
//         <div className="embla__slide"><img src="https://picsum.photos/201/300" /></div>
//         <div className="embla__slide"><img src="https://picsum.photos/200/300" /></div>
//         <div className="embla__slide"><img src="https://picsum.photos/202/300" /></div>
//       </div>
//       <button className="embla__prev" onClick={scrollPrev}>
//         Prev
//       </button>
//       <button className="embla__next" onClick={scrollNext}>
//         Next
//       </button>
//     </div>
//   )
// }


import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailHover = (index) => {
    setCurrentIndex(index);
  };

      const images = [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/310',
        'https://picsum.photos/200/305',
        // Add more image paths as needed
      ]

  return (
    <div className="carousel">
      <div className="main-image">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="thumbnails">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onMouseEnter={() => handleThumbnailHover(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
