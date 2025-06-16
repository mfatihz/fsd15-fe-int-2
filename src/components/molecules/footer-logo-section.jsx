import ChillLogoFull from '../atoms/chill-logo-full';
import Copyright from '../atoms/copyright';

const FooterLogoSection = () => {
  return (
    <div
      className="flex flex-col flex-none items-start justify-start gap-2 sm:gap-4 mb-6 sm:mb-0"
    >
      <a href="#top"><ChillLogoFull className="hover:animate-bounce duration-700" /></a>
      <Copyright />
    </div>
  );
};

export default FooterLogoSection;