import GalleryTitle from "../atoms/gallery-title"
import PosterSlider from "./poster-slider"

const Gallery = ({title, movies, galleryType, mylistToggleHandler, isInMyListHandler, isWrapped, alt="Belum ada"}) => {
  return (
    <div className="relative w-full">
      <GalleryTitle>{title}</GalleryTitle>
      {movies && <PosterSlider movies={movies} galleryType={galleryType} mylistToggleHandler={mylistToggleHandler} isInMyListHandler={isInMyListHandler} isWrapped={isWrapped} alt={alt}/>}
    </div>
  )
}

export default Gallery