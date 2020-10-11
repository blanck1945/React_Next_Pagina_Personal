import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer_div">
      <div className="center_div">
        <a href="https://github.com/blanck1945?tab=repositories">
          <SiGithub className="icon git" />
        </a>
        <a href="https://www.linkedin.com/in/augusto-salvador-pastrana-4b30121b0/">
          <FaLinkedin className="icon li" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
