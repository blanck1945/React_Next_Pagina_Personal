import Title from "../../component/Title";
import Axios from "axios";
import { GlobalRoutes } from "../../Api/Routes";
import { Project } from "../../Interfaces/Project";
import { NextPage } from "next";
import ProjectCard from "../../component/projectCard";
import Header from "../../component/Header";
import { useContext, useEffect } from "react";
import { NavbarContext } from "../../Context/NavbarCon";

export interface ProjectProps {
  projects: Project[];
}

const index: NextPage<ProjectProps> = ({ projects }) => {
  const { setNavState } = useContext(NavbarContext);
  useEffect(() => {
    setNavState({ title: "Mis Proyectos" });
  }, []);

  return (
    <div className="page_box">
      <div className="page_fon">
        <Title title_class="title">Paginas Webs Activas</Title>
        {projects.map((el: Project, index: number) =>
          el.project_type === "Pagina Web" && el.project_state === true ? (
            <ProjectCard key={el.id} data={el} />
          ) : null
        )}
        <Title title_class="title up">Aplicaciones</Title>
        {projects.map((el: Project, index: number) =>
          el.project_type === "Aplicación" ? (
            <ProjectCard key={el.id} data={el} />
          ) : null
        )}
        <Title title_class="title up">Paginas Web No Activas</Title>
        {projects.map((el: Project, index: number) =>
          el.project_state === false ? (
            <ProjectCard key={el.id} data={el} />
          ) : null
        )}
      </div>
    </div>
  );
};

index.getInitialProps = async () => {
  const { data } = await Axios.get(GlobalRoutes.getAllProjects);
  return {
    projects: data,
  };
};

export default index;
