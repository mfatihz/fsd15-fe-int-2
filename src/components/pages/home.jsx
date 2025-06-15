import { useEffect, useState } from 'react';
import HomeTemplate from "../templates/home-template"
import { navData, menuData, genreData, helpData } from "../../utils/app/home-utils"
import { movieHero, movieGalleries } from "../../utils/data/home-page-data"
import useLocalStorage from "../../hooks/use-local-storage"

function Home() {
  const header = { navData:navData, menuData:menuData }
  const footer = { genreData:genreData, helpData:helpData }
  
  /*
    Note: pada tahapa ini data masih statis, bisa saja langsung di export dari utils tanpa perlu useState dan useEffect
    const hero = movieHero
    const galleries = movieGalleries
  */
  const [ hero, setHero ] = useState([]);
  const [ galleries, setGalleries ] = useState([]);

  const { toggleId: mylistToggleHandler, hasId: isInMyListHandler } = useLocalStorage('my-lists', new Set());

  useEffect(() => {
    setHero(movieHero);
    setGalleries(movieGalleries);
  }, [movieHero, movieGalleries]);

  return (
    <HomeTemplate
      header={header}
      footer={footer}
      hero={hero}
      galleries={galleries}
      mylistToggleHandler={mylistToggleHandler}
      isInMyListHandler={isInMyListHandler}
    />
  )
}

export default Home