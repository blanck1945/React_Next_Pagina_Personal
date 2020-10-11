import Link from "next/link";
import Title from "./Title";
import { useContext } from "react";
import { NavbarContext } from "../Context/NavbarCon";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";

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
      <Title light={true}>{navState.title}</Title>
    </div>
  );
};

export default Navbar;
