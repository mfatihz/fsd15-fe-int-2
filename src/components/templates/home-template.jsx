import Gallery from "../organisms/gallery"
import Header from "../organisms/home-header"
import Hero from "../organisms/hero"
import Footer from "../organisms/home-footer"
import NoContent from "../atoms/no-content"

function HomeTemplate({ header, footer, hero, galleries }) {
    return (
        <div className="min-h-screen flex flex-col">
            <header 
                id="top"
                className="
                    px-4 sm:px-10 md:px-20
                    py-2 sm:py-4 md:py-6
                "
                // bg-[#0f0f1a]
            >
                <Header
                    navData={header.navData}
                    menuData={header.menuData}
                />
            </header>

            { hero &&
                <Hero
                    movie={hero}
                    className="
                        px-4 sm:px-10 md:px-20
                        pb-4 sm:pb-10 md:pb-20
                    "
                    // bg-[#0f0f1a]
                />
            }

            <main
                className="
                    flex-1
                    px-4 sm:px-10 md:px-20
                    py-4 sm:py-10 md:py-20
                    overflow-x-hidden
                    flex flex-col
                    w-full
                "
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
                                />
                            </div>
                        )
                    )
                    : <NoContent color="text-yellow-500">Belum ada isi</NoContent>
                }
            </main>
            
            <Footer
                genreData={footer.genreData}
                helpData={footer.helpData}
                className="
                    px-4 sm:px-10 md:px-20
                    py-10 md:py-20
                "
                //bg-[#181A1C]
            />
        </div>
    )
}

export default HomeTemplate