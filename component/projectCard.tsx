import { Project } from "../Interfaces/Project";
import Header from "./Header";
import TypeData from "./TypeData/TypeData";
import { getColor } from "./funcs/getColo";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard = ({ data }) => {
  return (
    <div className="project_card">
      <Header header={true}>{data.project_name}</Header>
      <div className="card_center">
        <div className="card_info">
          <div className="type_div">
            <TypeData label="Tipo" h3Label={data.project_type} h3Comp={true} />
            <TypeData
              label="Descripción"
              h3Label={data.project_desc}
              para={true}
            />
          </div>
          <Header>Front-end</Header>
          <div className="tech_div">
            {data.project_front.map((tech: string, techIndex: number) => (
              <h4 key={techIndex} style={{ color: getColor(tech) }}>
                {tech}
              </h4>
            ))}
          </div>
          <Header>Back-end</Header>
          <div className="tech_div">
            {data.project_back.map((tech: string, techIndex: number) => (
              <h4 key={techIndex} style={{ color: getColor(tech) }}>
                {tech}
              </h4>
            ))}
          </div>
          <TypeData label="URL" h3Label={data.project_URL} aLabel={true} />
          <TypeData
            label="GitHub"
            h3Label={data.project_github}
            aLabel={true}
          />
        </div>
        <div className="div_img">  
        <img
          src={"/images/" + data.project_img}
          alt="starlight"
          className="project_img"
          />
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
