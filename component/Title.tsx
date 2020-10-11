import { Children } from "react";

interface TitleProps {
  children?: any;
  light?: boolean;
}

const Title = ({ children, light }: TitleProps) => {
  return <h1 className={light ? "skyTitle" : "title"}>{children}</h1>;
};

export default Title;
