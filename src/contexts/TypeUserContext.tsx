import { createContext, useMemo, useState } from "react";

interface Type {
  typeUser: string;
  chooseClient: () => void;
  chooseCompany: () => void;
}

export const TypeUserContext = createContext<Type | null>(null);

interface Props {
  children: React.ReactNode;
}

export function TypeUserContextProvider({ children }: Props) {
  const [typeUser, setTypeUser] = useState<string>("");

  function chooseClient() {
    setTypeUser("Client");
  }

  function chooseCompany() {
    setTypeUser("Company");
  }

  const typeUserProviderValue = useMemo(
    () => ({ typeUser, chooseClient, chooseCompany }),
    [typeUser, chooseClient, chooseCompany]
  );

  return (
    <TypeUserContext.Provider value={typeUserProviderValue}>
      {children}
    </TypeUserContext.Provider>
  );
}
