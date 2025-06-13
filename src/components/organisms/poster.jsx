import PosterDefault from '../molecules/poster-default'
import PosterHover from '../molecules/poster-hover'
import { useState } from 'react'

function Poster({
  movie,
  galleryType,
  isMobile=false,
}) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div
      className="relative overflow-visible"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <PosterDefault
        movie={ movie }
        galleryType={ galleryType }
        className={ galleryType !== 'continue' ? 'cursor-pointer' : '' }
      />
      
      { !isMobile && isHovered && galleryType !== 'continue' && 
        <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <PosterHover movie={movie} />
        </div>
      }
    </div>
  )
}

export default Poster