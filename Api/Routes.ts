const prefix =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3500/api/"
    : "https://sq-heroku-react.herokuapp.com/api/";

export const GlobalRoutes = {
  getAllProjects: prefix + "projects/all",
  getAllTechs: prefix + "techs/all",
};
