import clsx from 'clsx'
import FooterGroup from "./footer-group";
import ChillLogoFull from "../atoms/chill-logo-full";
import Copyright from "../atoms/copyright";
import FooterLinks from '../molecules/footer-links';

const HomeFooter = ({ genreData, helpData, className }) => {
  const baseStyle = `
    flex flex-col sm:flex-row gap-4 sm:gap-10 md:gap-20
    border-t border-gray-300
  `
  const genreLinks = <FooterLinks 
    links={ genreData.links }
    basePath={ genreData.basePath }
    columns='columns-2 md:columns-4 gap-8'
  />
  const helpLinks = <FooterLinks 
    links={ helpData.links }
    basePath={ helpData.basePath }
  />
  
  return (
    <footer className={clsx(baseStyle, className)}>
      <section
        className="flex flex-col flex-none items-start justify-start gap-2 sm:gap-4 mb-6 sm:mb-0"
      >
        <a href="#top"><ChillLogoFull className="hover:animate-bounce duration-700" /></a>
        <Copyright />
      </section>
        <FooterGroup
          title={ genreData.title }
          links={ genreLinks }
        />
        <FooterGroup
          title={ helpData.title }
          links={ helpLinks }
        />
      {/* </div> */}
    </footer>
  );
};

export default HomeFooter;