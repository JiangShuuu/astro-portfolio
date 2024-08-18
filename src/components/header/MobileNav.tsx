import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { useStore } from "@nanostores/react";
import { isNavSheetOpen } from "@/store/use-nav-sheet";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const [pathname, setPathname] = useState("");
  const $isNavSheetOpen = useStore(isNavSheetOpen);

  const openSheet = () => {
    isNavSheetOpen.set(!$isNavSheetOpen);
  };

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <Sheet open={$isNavSheetOpen} onOpenChange={openSheet}>
      <SheetTrigger className="flex justify-center items-center xl:hidden">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <a href="/">
            <h1 className="text-4xl font-semibold">
              Luke<span className="text-accent">.</span>
            </h1>
          </a>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <a
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
