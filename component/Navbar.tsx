import Title from "./Title";
import { useContext } from "react";
import { NavbarContext } from "../Context/NavbarCon";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const { navState } = useContext(NavbarContext);
  const router = useRouter();
  return (
    <div className="navbar">
      <div className="link_box">
        <ActiveLink href="/">CV</ActiveLink>
        <ActiveLink href="/proyectos">Proyectos</ActiveLink>
        <ActiveLink href="/acerca">Acerca</ActiveLink>
      </div>
      <div className="footer_center">
        <a href="https://github.com/blanck1945?tab=repositories">
          <SiGithub className="icon git" />
        </a>
        <a href="https://www.linkedin.com/in/augusto-salvador-pastrana-4b30121b0/">
          <FaLinkedin className="icon li" />
        </a>
      </div>
      <div className="title_div">
      <Title light={true}>{navState.title}</Title>
      </div>
    </div>
  );
};

export default Navbar;
