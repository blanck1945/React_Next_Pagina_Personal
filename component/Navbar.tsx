import Link from "next/link";
import Title from "./Title";
import { useContext } from "react";
import { NavbarContext } from "../Context/NavbarCon";

const Navbar = () => {
  const { navState } = useContext(NavbarContext);

  return (
    <div className="navbar">
      <div className="link_box">
        <Link href="/">Home</Link>
        <Link href="/projects">Proyectos</Link>
      </div>
      <Title>{navState.title}</Title>
    </div>
  );
};

export default Navbar;
