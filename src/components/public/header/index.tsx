import Container from "~/components/global/Container";
import NavBar from "./navbar";
import SiteLogo from "~/components/global/SiteLogo";
import ThemeToggler from "~/components/global/ThemeToggler";

const Header = () => {
  return (
    <header className="w-full border-b bg-background px-4 py-3 shadow-sm">
      <Container className="flex items-center gap-4">
        <SiteLogo />
        <NavBar />
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggler />
        </div>
      </Container>
    </header>
  );
};

export default Header;
