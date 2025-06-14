import clsx from 'clsx'
import { Link } from "react-router"
import ChillLogo from "../atoms/chill-logo"
import NavigationalLinks from "../molecules/navigational-links"
import SettingMenu from "./setting-menu"

function HomeHeader({ navData, menuData, padding}) {
  const baseStyle = "w-full flex gap-4 sm:gap-8 items-center"
  return (
    <header className={clsx(baseStyle, padding)}
    >
      
      <Link to="/">
        <ChillLogo />
      </Link>
      
      <NavigationalLinks links={ navData } />
      <SettingMenu links={ menuData } className="ml-auto"/>
    </header>
  )
}

export default HomeHeader