import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "docs",
    path: "/docs/intro",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "projects",
    path: "/projects",
  },
  // {
  //   name: "contact",
  //   path: "/contact",
  // },
];

const Header = () => {
  return (
    <header className=" text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <h1 className="text-4xl font-semibold">
          <a href="/">
            John Lu<span className="text-accent">.</span>
          </a>
        </h1>
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav links={links} />
          <a href="/resume?tab=about">
            <Button className="cursor-pointer">Hire me</Button>
          </a>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  );
};

export default Header;
