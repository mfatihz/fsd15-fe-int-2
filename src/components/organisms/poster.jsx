// import PosterDefault from '../molecules/poster-default'
// import PosterHover from '../molecules/poster-hover'
// import { useState } from 'react'

// function Poster({
//   movie,
//   galleryType,
//   isMobile=false,
// }) {
//   const [isHovered, setIsHovered] = useState(false)
  
//   return (
//     <div
//       className="relative overflow-visible"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <PosterDefault
//         movie={ movie }
//         galleryType={ galleryType }
//         className={ galleryType !== 'continue' ? 'cursor-pointer' : '' }
//       />

//       { (!isMobile && isHovered && galleryType !== 'continue') && 
//         <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <PosterHover movie={movie} />
//         </div>
//       }
//     </div>
//   )
// }

// export default Poster
import PosterDefault from '../molecules/poster-default'
import PosterHover from '../molecules/poster-hover'
import { useState, useRef } from 'react'

function Poster({
  movie,
  galleryType,
  isMobile=false,
  padding
}) {
  const [isHovered, setIsHovered] = useState(false)
  const posterRef = useRef(null)
  
  // Fungsi untuk menentukan posisi hover
  const getHoverPosition = () => {
    if (!posterRef.current) return {}
    
    const rect = posterRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const hoverWidth = rect.width //lebar PosterHover //const hoverWidth = 408
    
    // Jika poster terlalu dekat ke sisi kanan
    if (rect.right + hoverWidth / 2 > viewportWidth) {
      return { right: '0', transform: 'translateX(0) translateY(-50%)' }
    }
    // Jika poster terlalu dekat ke sisi kiri
    else if (rect.left - hoverWidth / 2 < 0) {
      return { left: '0', transform: 'translateX(0) translateY(-50%)' }
    }
    // Posisi normal (tengah)
    return { left: '50%', transform: 'translateX(-50%) translateY(-50%)' }
  }
  
  return (
    <div
      className="relative overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={posterRef}
    >
      <PosterDefault
        movie={ movie }
        galleryType={ galleryType }
        className={ galleryType !== 'continue' ? 'cursor-pointer' : '' }
      />

      { (!isMobile && isHovered && galleryType !== 'continue') && 
        <div 
          className="absolute z-30 top-1/2"
          style={getHoverPosition()}
        >
          <PosterHover movie={movie} />
        </div>
      }
    </div>
  )
}

export default Poster