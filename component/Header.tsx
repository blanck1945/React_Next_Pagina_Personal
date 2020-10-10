import React from "react";

interface HeaderProps {
  children: any;
  header?: boolean;
  header_class?: string;
}

const Header = ({ children, header, header_class }: HeaderProps) => {
  return (
    <>
      {header ? (
        <h2 className="header_title">{children}</h2>
      ) : (
        <h2 className={header_class ? header_class : "header_default"}>
          {children}
        </h2>
      )}
    </>
  );
};

export default Header;
