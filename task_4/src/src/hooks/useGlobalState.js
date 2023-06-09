import {useContext} from "react";
import {GlobalStateContext} from "../contexts/globalStateContext";


export const useGlobalState = () => {
  return useContext(GlobalStateContext);
}