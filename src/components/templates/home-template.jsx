import Header from "../organisms/home-header"
import Hero from "../organisms/hero"
import Footer from "../organisms/home-footer"
import GalleryTemplate from "./gallery-template"

function HomeTemplate({ header, footer, hero, galleries, idToggleHandler, isInMyListHandler }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header
                navData={header.navData}
                menuData={header.menuData}
                padding="
                    px-4 sm:px-10 md:px-20
                    py-2 sm:py-4 md:py-6
                "
                id="top"
            />

            { hero &&
                <Hero
                    movies={hero}
                    padding="
                        px-4 sm:px-10 md:px-20
                        pb-4 sm:pb-10 md:pb-20
                    "
                />
            }

            <GalleryTemplate
                galleries={galleries}
                padding="
                    px-4 sm:px-10 md:px-20
                    py-4 sm:py-10 md:py-20
                "
                idToggleHandler={idToggleHandler}
                isInMyListHandler={isInMyListHandler}
            />
            
            <Footer
                genreData={footer.genreData}
                helpData={footer.helpData}
                className="
                    px-4 sm:px-10 md:px-20
                    py-10 md:py-20
                "
            />
        </div>
    )
}

export default HomeTemplate