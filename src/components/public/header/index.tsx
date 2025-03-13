import Container from "~/components/global/Container";
import NavBar from "./navbar";
import SiteLogo from "~/components/global/SiteLogo";
import ThemeToggler from "~/components/global/ThemeToggler";

const Header = () => {
  return (
    <header className="w-full border-b px-4 py-2 shadow-sm sm:py-3">
      <Container className="flex items-center gap-0.5 sm:gap-4">
        <SiteLogo />
        <NavBar />
        <div className="flex items-center gap-2 ml-auto">
          <ThemeToggler />
        </div>
      </Container>
    </header>
  );
};

export default Header;
