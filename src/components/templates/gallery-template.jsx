import clsx from 'clsx'
import Gallery from "../organisms/gallery"
import NoContent from "../atoms/no-content"

function GalleryTemplate({ galleries, padding, mylistToggleHandler, isInMyListHandler }) {
    const baseStyle = `
        flex-1
        flex flex-col
        overflow-x-hidden
        w-full
    `
    return (
        <main
            className={clsx(baseStyle, padding)}
            //bg-[#181A1C]
        >
            { galleries?.length > 0
                ? galleries?.map(
                    (gallery, index) => (
                        <div key={index} className="w-full overflow-visible">
                            <Gallery
                                title={gallery.title}
                                movies={gallery.movies}
                                galleryType={gallery.type}
                                mylistToggleHandler={mylistToggleHandler}
                                isInMyListHandler={isInMyListHandler}
                                isWrapped={gallery.isWrapped}
                            />
                        </div>
                    )
                )
                : <NoContent color="text-yellow-500">Belum ada isi</NoContent>
            }
        </main>
    )
}

export default GalleryTemplate