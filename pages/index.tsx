import { useEffect, useContext } from "react";
import { NavbarContext } from "../Context/NavbarCon";
import Header from "../component/Header";

export default function Home() {
  const { setNavState } = useContext(NavbarContext);
  useEffect(() => {
    setNavState({ title: "Bienvenido" });
  }, []);

  return (
    <div>
      <Header>CV</Header>
    </div>
  );
}
