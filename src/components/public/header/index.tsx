import Container from "~/components/global/Container";
import NavBar from "./navbar";
import SiteLogo from "~/components/global/SiteLogo";

const Header = () => {
  return (
    <header className="w-full border-b bg-background px-4 py-3 shadow-sm">
      <Container className="flex items-center gap-4">
        <SiteLogo />
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
