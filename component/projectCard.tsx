import { Project } from "../Interfaces/Project";
import Header from "./Header";
import TypeData from "./TypeData/TypeData";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard = ({ data }) => {
  const getColor = (text: string) => {
    switch (text) {
      case "React":
        return "#00d8ff";
      case "Redux":
        return "#764abc";
      case "SCSS":
        return "rgb(207, 100, 154)";
      case "TypeScript":
        return "#007acc";
      case "Gatsby":
        return "rgb(102, 51, 153)";
      case "CSS":
        return "#264de4";
      case "Webpack":
        return "rgb(28, 120, 192)";
      case "Context-API":
        return "#00d8ff";
      case "DatoCMS":
        return "rgb(255, 118, 81)";
    }
  };

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
          <Header>Tecnologias</Header>
          <div className="tech_div">
            {data.project_tech.map((tech: string, techIndex: number) => (
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
        <img
          src={"/images/" + data.project_img}
          alt="starlight"
          className="project_img"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
