import { useState, useEffect } from "react";

const Nav = ({ links }: { links: { name: string; path: string }[] }) => {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <a
          href={link.path}
          key={index}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
