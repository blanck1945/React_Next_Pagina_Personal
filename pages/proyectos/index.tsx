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

  console.log(projects);

  return (
    <div className="page_box">
      <Title title_class="title">Paginas Webs Activas</Title>
      {projects.map((el: Project, index: number) =>
        el.project_type === "Pagina Web" && el.project_state === true ? (
          <ProjectCard key={el.id} data={el} />
        ) : null
      )}
      <Title title_class="title up">Aplicaciones</Title>
      {projects.map((el: Project, index: number) =>
        el.project_type === "Aplicación" && el.project_state !== false ? (
          <ProjectCard key={el.id} data={el} />
        ) : null
      )}
      <Title title_class="title up">Librerias</Title>
      {projects.map((el: Project, index: number) =>
        el.project_type === "Libreria" ? (
          <ProjectCard key={el.id} data={el} />
        ) : null
      )}
      <Title title_class="title up">Proyectos no activos</Title>
      {projects.map((el: Project, index: number) =>
        el.project_state === false ? (
          <ProjectCard key={el.id} data={el} />
        ) : null
      )}
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
