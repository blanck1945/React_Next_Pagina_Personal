import { useEffect, useContext } from "react";
import { NavbarContext } from "../Context/NavbarCon";
import Title from "../component/Title";

export default function Home() {
  const { setNavState } = useContext(NavbarContext);
  useEffect(() => {
    setNavState({ title: "Bienvenido" });
  }, []);

  return (
    <div className="center_div">
      <Title title_class="title">CV</Title>
      <div className="center_box">
        <div className="CV">
          <img src="/images/CV1.png" alt="cv1" className="img" />
        </div>
        <div className="book_div"></div>
        <div className="CV">
          <img src="/images/CV2.png" alt="cv2" className="img" />
        </div>
      </div>
    </div>
  );
}
