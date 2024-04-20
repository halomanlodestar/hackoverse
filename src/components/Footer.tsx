import { useEffect, useState } from "react";

const Footer = () => {
  const words = ["for Everyone", "Everywhere", "at Anytime"];

  const [word, setWord] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const index = word >= words.length ? 0 : word + 1;
      setWord(index);
    }, 3000);
  }, [word, words.length]);

  return (
    <footer
      className={
        "bg-[#e0e0e0] w-full h-full flex ite ms-center py-3 justify-center"
      }
    >
      <div className={"w-4/5 h-full flex items-center justify-center relative"}>
        <div className={"w-full flex items-center justify-center"}>
          <img alt={"logo"} src={"/logo-hackoverse.png"} />
        </div>
        <div
          className={
            "absolute top-[45%] flex justify-center left-0 w-full h-10"
          }
        >
          <h2 className={"text-4xl font-semibold"}>
            G1 <span className={"text-black"}>{words[word]}</span>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
