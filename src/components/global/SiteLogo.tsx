import Link from "next/link";
import { SITE_TITLE } from "~/constants/site-config";

const SiteLogo = () => {
  return (
    <Link href={`/`} className="relative flex items-center justify-center">
      <h1 className="text-xl font-bold text-primary">{SITE_TITLE}</h1>
    </Link>
  );
};

export default SiteLogo;
