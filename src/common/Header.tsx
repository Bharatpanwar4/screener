import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";
import NavDropdown from "./NavDropdown";

const Header = ({ user }: { user: User }) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href={"/"}>
          <Image
            src={"/assets/icons/logo.svg"}
            alt="screener logo"
            height={32}
            width={140}
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
        {/* navItems */}
        <nav className="hidden sm:block ">
          <NavItems />
        </nav>
        {/* user dropdown */}
        <NavDropdown user={user} />
      </div>
    </header>
  );
};

export default Header;
