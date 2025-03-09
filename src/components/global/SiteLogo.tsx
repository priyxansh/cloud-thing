import Link from "next/link";
import { SITE_TITLE } from "~/constants/site-config";

const SiteLogo = () => {
  return (
    <Link href={`/`} className="relative flex items-center justify-center">
      <h1 className="text-lg font-bold text-primary sm:text-xl">
        {SITE_TITLE}
      </h1>
    </Link>
  );
};

export default SiteLogo;
