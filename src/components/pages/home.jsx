import HomeTemplate from "../templates/home-template"
import { navData, menuData, genreData, helpData } from "../../utils/app/home-utils"
import { movieHero, movieGalleries } from "../../utils/data/home-data"

function Home() {
  const header = { navData:navData, menuData:menuData }
  const footer = { genreData:genreData, helpData:helpData }
  const hero = movieHero
  const galleries = movieGalleries

  return (
    <HomeTemplate
      header={header}
      footer={footer}
      hero={hero}
      galleries={galleries}
    />
  )
}

export default Home