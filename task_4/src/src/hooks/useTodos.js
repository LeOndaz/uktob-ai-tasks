import {useGlobalState} from "./useGlobalState";


export const useTodos = () => {
  return useGlobalState().todos;
}
