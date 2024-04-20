const navItems = [
  {
    name: "Home",
    href: "/",
  },
];

const Navbar = () => {
  return (
    <header
      className={
        "backdrop-blur z-30 bg-neutral-800/50 w-full h-20 sticky top-0 flex justify-center items-center"
      }
    >
      <div className={"w-4/5 flex items-center justify-between"}>
        <div className={"flex items-center justify-center space-x-2"}>
          <img
            alt={"logo"}
            src={"/logo-hackoverse.png"}
            className={"w-14 h-14 bg-[#333] rounded-full"}
          />
          <span className={"text-2sxl"}>G1</span>
        </div>
        <nav>
          {navItems.map((item) => (
            <li>{item.name}</li>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
