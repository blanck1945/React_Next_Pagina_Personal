import { Children } from "react";

interface TitleProps {
  children?: any;
  light?: boolean;
  title_class?: string;
}

const Title = ({ children, light, title_class }: TitleProps) => {
  return <h1 className={light ? "skyTitle" : title_class}>{children}</h1>;
};

export default Title;
