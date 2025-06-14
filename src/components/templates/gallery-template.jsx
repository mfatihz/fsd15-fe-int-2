import clsx from 'clsx'
import Gallery from "../organisms/gallery"
import NoContent from "../atoms/no-content"
import { useState } from 'react';

function GalleryTemplate({ galleries, padding }) {
    const [favoriteItems, setFavoriteItems] = useState(new Set());

    function handleClick(value) {
        setFavoriteItems(()=>
            {
                if(favoriteItems.has(value)){
                    favoriteItems.delete(value)
                } else {
                    favoriteItems.add(value)
                }
                return new Set(favoriteItems)
            }
        )
        console.log(favoriteItems)
    }

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
                                onClick={handleClick}
                                checkedList={favoriteItems}
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