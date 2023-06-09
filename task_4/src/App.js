import './App.css';
import {useReducer} from "react";
import {INITIAL_STATE} from "./src/store/initial";
import {GlobalStateContext} from "./src/contexts/globalStateContext";
import {DispatchContext} from "./src/contexts/dispatchContext";
import {mainReducer} from "./src/store/reducers";
import TodoList from "./src/components/Todo/TodoList";
import TodoForm from "./src/components/Todo/TodoForm";

function App() {
  const [store, dispatch] = useReducer(
    mainReducer,
    INITIAL_STATE,
    (init) => init
  );

  return (
    <GlobalStateContext.Provider value={store}>
      <DispatchContext.Provider value={dispatch}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: 600,
          margin: "auto",
          marginTop: 10,
        }}>
          <TodoForm/>

          <hr style={{ width: "100%"}}/>
          <span style={{marginTop: 20}}/>

          <TodoList/>
        </div>
      </DispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
}

export default App;
