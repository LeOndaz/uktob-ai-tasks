import {useContext} from "react";
import {DispatchContext} from "../contexts/dispatchContext";

export const useDispatch = () => useContext(DispatchContext)
