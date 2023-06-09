import {useDispatch} from "../../hooks/useDispatch";
import actions from "../../store/actions";
import {useState} from "react";
import {useTodos} from "../../hooks/useTodos";

const TodoForm = () => {
  const dispatch = useDispatch();
  const todos = useTodos();
  const [text, setText] = useState("");

  const onSubmit = () => {
    console.log(text);

    dispatch(actions.createTodo({
      id: todos.length + 1,
      title: text,
    }))
  }

  return <form style={{display: "flex", justifyContent: "space-between"}}>
    <textarea
      placeholder={"TODO title"}
      onChange={(e) => setText(e.target.value)}
      rows={3}
      cols={60}
      style={{
        resize: "none"
      }}
    />
    <button type="button" onClick={onSubmit} style={{
      padding: 5,
      borderRadius: 5,
      border: "1px solid gray",
      cursor: "pointer"
    }}>Submit
    </button>
  </form>
}

export default TodoForm;