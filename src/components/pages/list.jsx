import { navData, menuData, genreData, helpData } from "../../utils/app/home-utils"
import { myList } from "../../utils/data/home-data"
import HomeTemplate from "../templates/home-template"

function List() {
  const header = { navData:navData, menuData:menuData }
  const footer = { genreData:genreData, helpData:helpData }
  const galleries = myList

  return (
    <HomeTemplate
      header={header}
      footer={footer}
      galleries={galleries}
    />
  )
}

export default List 