import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-4 text-white bg-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <h1 className="text-4xl font-semibold">
          <a href="/">
            John Lu<span className="text-accent">.</span>
          </a>
        </h1>
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="/contact">
            <Button>Hire me</Button>
          </a>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
