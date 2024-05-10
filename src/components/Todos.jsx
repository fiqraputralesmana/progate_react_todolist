import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo} // Delete
          />
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    margin: "0 auto",

    // width: "40%",
  },
};

export default Todos;
