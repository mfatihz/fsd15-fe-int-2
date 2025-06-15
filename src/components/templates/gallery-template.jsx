// import clsx from 'clsx'
// import Gallery from "../organisms/gallery"
// import NoContent from "../atoms/no-content"
// import { useState } from 'react';

// function GalleryTemplate({ galleries, padding }) {
//     const [ids, toggleId] = useState(new Set());

//     function handleClick(value) {
//         toggleId(()=>
//             {
//                 if(ids.has(value)){
//                     ids.delete(value)
//                 } else {
//                     ids.add(value)
//                 }
//                 return new Set(ids)
//             }
//         )
//         console.log(ids)
//     }

//     const baseStyle = `
//         flex-1
//         flex flex-col
//         overflow-x-hidden
//         w-full
//     `
//     return (
//         <main
//             className={clsx(baseStyle, padding)}
//             //bg-[#181A1C]
//         >
//             { galleries?.length > 0
//                 ? galleries?.map(
//                     (gallery, index) => (
//                         <div key={index} className="w-full overflow-visible">
//                             <Gallery
//                                 title={gallery.title}
//                                 movies={gallery.movies}
//                                 galleryType={gallery.type}
//                                 onClick={handleClick}
//                                 checkedList={ids}
//                             />
//                         </div>
//                     )
//                 )
//                 : <NoContent color="text-yellow-500">Belum ada isi</NoContent>
//             }
//         </main>
//     )
// }

// export default GalleryTemplate
import clsx from 'clsx'
import Gallery from "../organisms/gallery"
import NoContent from "../atoms/no-content"
import useLocalStorage from '../../hooks/use-local-storage';

function GalleryTemplate({ galleries, padding, mylistToggleHandler, isInMyListHandler }) {
    //const {ids, toggleId: mylistToggleHandler, hasId} = useLocalStorage('my-lists', new Set());

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