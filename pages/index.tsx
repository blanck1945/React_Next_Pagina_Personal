import { useEffect, useContext } from "react";
import { NavbarContext } from "../Context/NavbarCon";

export default function Home() {
  const { setNavState } = useContext(NavbarContext);
  useEffect(() => {
    setNavState({ title: "Bienvenido" });
  }, []);

  return (
    <div className="center_div">
      <div className="CV">
        <img src="/images/CV1.png" alt="cv1" className="img" />
      </div>
      <div className="book_div"></div>
      <div className="CV">
        <img src="/images/CV2.png" alt="cv2" className="img"/>
      </div>
    </div>
  );
}
