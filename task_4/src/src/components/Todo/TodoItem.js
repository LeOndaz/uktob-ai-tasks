const TodoItem = ({id, title, createdAt}) => {
  return <div style={{
    display: "flex",
    flexDirection: "column",
  }}>
    <div style={{ display: "flex"}}>
      <span style={{marginBottom: 5, marginRight: 10}}>#{id}</span>
      <span>{title}</span>
    </div>
  </div>
}

export default TodoItem;