import { useContext } from "react";

import { TypeUserContext } from "../contexts/TypeUserContext";

export default function useType() {
  const typeUserContext = useContext(TypeUserContext);

  if (!typeUserContext) {
    throw new Error("useType must be used inside a TypeUserContext Provider");
  }

  return typeUserContext;
}
