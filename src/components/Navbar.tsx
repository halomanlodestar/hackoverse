const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Login",
    href: "/login"
  }
];

const Navbar = () => {
  return (
    <header
      className={
        "backdrop-blur z-30 bg-white w-full h-20 sticky top-0 flex justify-center items-center"
      }
    >
      <div className={"w-4/5 flex items-center justify-between"}>
        <a className={"flex items-center justify-center space-x-2"} href={"/"}>
          <img
            alt={"logo"}
            src={"/logo-hackoverse.png"}
            className={"w-14 h-14 rounded-full"}
          />

          {/*<Link to={"dashboard"}>*/}
          <span className={"text-2sxl"}>G1</span>
          {/*</Link>*/}
        </a>
      </div>
      <nav className={"flex items-center space-x-4"}>
        {navItems.map((item) => (
          <a href={item.href} className={"cursor-pointer"}>
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
