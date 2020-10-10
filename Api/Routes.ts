const prefix =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3500/api/"
    : "https://sq-heroku-react.herokuapp.com/";

export const projectRoutes = {
  getAllProjects: prefix + "api/projects/all",
};
