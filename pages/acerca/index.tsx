import { useContext, useEffect } from "react";
import { NavbarContext } from "../../Context/NavbarCon";
import Axios from "axios";
import { GlobalRoutes } from "../../Api/Routes";
import { Techs } from "../../Interfaces/Techs";
import Header from "../../component/Header";
import TechData from "../../component/TechData/TechData";
import Title from "../../component/Title";

interface AcercaProps {
  techs: Techs;
}

const index = ({ techs }: AcercaProps) => {
  const { setNavState } = useContext(NavbarContext);
  useEffect(() => {
    setNavState({ title: "Acerca de Mi" });
  }, []);

  return (
    <div className="acerca_div">
      <Title title_class="title">Conocimientos Web</Title>
      <div className="acerca_box">
        <div className="tech">
          <div className="cover">
            <TechData
              arr={techs}
              label="Lenguajes"
              techFilter="tech_type"
              filter="Lenguaje"
            />
            <TechData
              arr={techs}
              label="Frameworks"
              techFilter="tech_type"
              filter="Framework"
            />
            <TechData
              arr={techs}
              label="Modulador de Paquetes"
              techFilter="tech_type"
              filter="Modulador de Paquetes"
            />
          </div>
        </div>
        <div className="book"></div>
        <div className="tech">
          <div className="cover">
            <TechData
              arr={techs}
              label="Librerías"
              techFilter="tech_type"
              filter="Librería"
            />
            <TechData
              arr={techs}
              label="Base de Datos"
              techFilter="tech_type"
              filter="Base de Datos"
            />
            <TechData
              arr={techs}
              label="ORM - ORD"
              techFilter="tech_type"
              filter="ORM"
            />
            <TechData
              arr={techs}
              label="Query-Builder"
              techFilter="tech_type"
              filter="Query-Builder"
            />
            <TechData
              arr={techs}
              label="Control de Versiones"
              techFilter="tech_type"
              filter="Control de Versiones"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

index.getInitialProps = async () => {
  const { data } = await Axios.get(GlobalRoutes.getAllTechs);
  return {
    techs: data,
  };
};

export default index;
