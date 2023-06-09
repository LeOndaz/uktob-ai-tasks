import TodoItem from "./TodoItem";
import {useDispatch} from "../../hooks/useDispatch";
import {useEffect} from "react";
import {getTodoList} from "../../api";
import actions, {deleteTodo} from "../../store/actions";
import {useTodos} from "../../hooks/useTodos";


const TodoList = () => {
  const todos = useTodos();
  const dispatch = useDispatch();

  useEffect(() => {
    getTodoList().then(data => {
      dispatch(actions.setTodoList(data))
    })
  }, [])

  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  };

  return <div>
    {todos.map(item => {
      return (
        <div key={item.id} style={{display: "flex", justifyContent: "space-between", marginBottom: 10}}>
          <TodoItem id={item.id} title={item.title} createdAt={item.createdAt}/>
          <button
            onClick={() => handleDelete(item.id)}
            style={{
              borderRadius: 5,
              border: "1px solid gray",
              padding: 5,
              cursor: "pointer"
            }}
          >Delete
          </button>
        </div>
      )
    })}
  </div>
}

export default TodoList;