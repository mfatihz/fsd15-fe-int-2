import GalleryTitle from "../atoms/gallery-title"
import PosterSlider from "./poster-slider"

const Gallery = ({title, movies, galleryType, onClick, idChecker, isWrapped, alt="Belum ada"}) => {
  return (
    <div className="relative w-full">
      <GalleryTitle>{title}</GalleryTitle>
      {movies && <PosterSlider movies={movies} galleryType={galleryType} onClick={onClick} idChecker={idChecker} isWrapped={isWrapped} alt={alt}/>}
    </div>
  )
}

export default Gallery