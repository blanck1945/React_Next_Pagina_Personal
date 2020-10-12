import { Techs } from "../../Interfaces/Techs";
import Header from "../Header";
import { getValue } from "../funcs/getValue";

interface TechDataProps {
  arr: Techs[];
  label: string;
  filter: string;
}

const TechData = ({ arr, filter, label, techFilter }) => {
  return (
    <div className="tech_div">
      <Header header_class="tech_title">{label}</Header>
      {arr.map((tech: Techs) =>
        tech[`${techFilter}`] === filter ? (
          <div key={tech.id} className="tech_row">
            <img
              src={"/svg/" + tech.tech_img}
              alt="logo"
              className="logo_img"
            />
            <h3>{tech.tech_name}</h3>
            <h3>{tech.tech_type}</h3>
            <h3>
              {tech.tech_field.length === 1
                ? tech.tech_field
                : `${tech.tech_field[0]} - ${tech.tech_field[1]}`}
            </h3>
          </div>
        ) : null
      )}
    </div>
  );
};

export default TechData;
