import Link from "next/link";
import { SITE_LOGO_TEXT } from "~/constants/site-config";

const SiteLogo = () => {
  const siteLogoText = SITE_LOGO_TEXT.split(" ");
  const firstWord = siteLogoText[0];
  const lastWord = siteLogoText.at(-1);

  return (
    <Link href={`/`} className="relative flex items-center justify-center">
      <h1 className="text-lg font-semibold text-primary sm:text-xl sm:font-bold">
        <span>{firstWord}</span>
        <span className="text-foreground">{lastWord}</span>
      </h1>
    </Link>
  );
};

export default SiteLogo;
