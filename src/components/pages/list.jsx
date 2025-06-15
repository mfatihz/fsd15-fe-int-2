import { useEffect, useState } from 'react';
import { navData, menuData, genreData, helpData } from "../../utils/app/home-utils"
import { myList } from "../../utils/data/list-page-data"
import HomeTemplate from "../templates/home-template"

import useLocalStorage from "../../hooks/use-local-storage";
import { getMovies } from "../../utils/data/db-functions";

function List() {
  const header = { navData: navData, menuData: menuData };
  const footer = { genreData: genreData, helpData: helpData };
  const [ galleries, setGalleries ] = useState([]);

  const { ids, toggleId: mylistToggleHandler, hasId: isInMyListHandler } = useLocalStorage('my-lists', new Set());

  useEffect(() => {
    // Convert Set to Array and fetch movies whenever ids change
    const fetchMovies = async () => {
      const movieIds = Array.from(ids);
      const movies = getMovies(movieIds);
      setGalleries(myList(movies));
    };

    fetchMovies();
  }, [ids]);

  return (
    <HomeTemplate
      header={header}
      footer={footer}
      galleries={galleries}
      mylistToggleHandler={mylistToggleHandler}
      isInMyListHandler={isInMyListHandler}
    />
  );
}

export default List;