import Container from "~/components/global/Container";
import Header from "~/components/public/header";

type PublicLayoutProps = {
  children: React.ReactNode;
};

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <Header />
      <main className="px-4">
        <Container>{children}</Container>
      </main>
    </>
  );
};

export default PublicLayout;
