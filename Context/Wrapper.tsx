import { useState, useEffect, useMemo } from "react";
import { NavbarContext } from "./NavbarCon";

export interface NavContext {
  title: string;
}

//Provider
export const AppContextProvider = ({ children }) => {
  const [navState, setNavState] = useState<NavContext>({
    title: "Bienvenido",
  });

  //ComponentDidMouunt
  useEffect(() => {}, []);

  //
  const values = useMemo(
    () => ({
      navState, // States que seran visibles en el contexto.
      setNavState, // Funciones que son exportadas para manejo externo.
    }),
    [navState]
  ); // States que serán visibles en el contexto.

  return (
    <NavbarContext.Provider value={values}>{children}</NavbarContext.Provider>
  );
};
