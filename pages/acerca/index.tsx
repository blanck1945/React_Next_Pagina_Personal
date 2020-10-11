import { useContext, useEffect } from "react";
import { NavbarContext } from "../../Context/NavbarCon";

const index = () => {
  const { setNavState } = useContext(NavbarContext);
  useEffect(() => {
    setNavState({ title: "Acerca de Mi" });
  }, []);

  return (
    <div className="acerca_div">
      <p>acerca works</p>
    </div>
  );
};

export default index;
