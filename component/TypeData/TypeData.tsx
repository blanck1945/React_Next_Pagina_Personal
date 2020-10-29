import Header from "../Header";
import H3 from "../H3";

interface TypeDataProps {
  div_class?: string;
  label?: string;
  h3Label?: string;
  aLabel?: boolean;
  h3Comp?: boolean;
  para?: boolean;
}

const TypeData = ({
  div_class,
  label,
  h3Comp,
  h3Label,
  para,
  aLabel,
}: TypeDataProps) => {
  return (
    <div className={div_class ? div_class : "div_default"}>
      <Header>{label}</Header>
      {para && <p className="type_text">{h3Label}</p>}
      {h3Comp && <H3>{h3Label}</H3>}
      {aLabel && (
        <a className="link fix-data" href={h3Label}>
          {h3Label}
        </a>
      )}
    </div>
  );
};

export default TypeData;
