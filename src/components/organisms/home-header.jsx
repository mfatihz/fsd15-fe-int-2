import { Link } from "react-router"
import ChillLogo from "../atoms/chill-logo"
import NavigationalLinks from "../molecules/navigational-links"
import SettingMenu from "./setting-menu"

function HomeHeader({ navData, menuData }) {
  return (
    <header className="w-full flex gap-4 sm:gap-8 items-center">
      <Link to="/">
        <ChillLogo />
      </Link>
      
      <NavigationalLinks links={ navData } />
      <SettingMenu links={ menuData } className="ml-auto"/>
    </header>
  )
}

export default HomeHeader