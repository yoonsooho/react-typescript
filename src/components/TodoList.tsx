import React from "react"
import { Todo } from "./model"
import SingleTodo from "./SingleTodo"
import "./styles.css"
import { Droppable } from "react-beautiful-dnd"

interface props {
  todos: Array<Todo>
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>
  CompletedTodos: Array<Todo>
}

const TodoList: React.FC<props> = ({ todos, setTodos, CompletedTodos, setCompletedTodos }) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">Active Tasks</span>
            {todos?.map((todo, index) => {
              return (
                <SingleTodo
                  index={index}
                  todos={todos}
                  todo={todo}
                  key={todo.id}
                  setTodos={setTodos}
                />
              )
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">Completed Tasks</span>
            {CompletedTodos?.map((todo, index) => {
              return (
                <SingleTodo
                  index={index}
                  todos={CompletedTodos}
                  todo={todo}
                  key={todo.id}
                  setTodos={setCompletedTodos}
                />
              )
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList
