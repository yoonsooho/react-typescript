import React, { useState, useRef, useEffect } from "react"
import { Todo } from "./model"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import "./styles.css"
import { Draggable } from "react-beautiful-dnd"

interface propsSingleTodo {
  index: number
  todo: Todo
  todos: Array<Todo>
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo: React.FC<propsSingleTodo> = (props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(props.todo?.todo)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  const handleDone = (id: number) => {
    props.setTodos(
      props.todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    )
  }
  const handleDelete = (id: number) => {
    props.setTodos(props.todos.filter((todo) => todo.id !== id))
  }
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault()

    props.setTodos(props.todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo)))
    setEdit(false)
  }
  return (
    <Draggable draggableId={props.todo?.id.toString()} index={props.index}>
      {(provided) => (
        <form
          className="todos__single"
          onSubmit={(e) => {
            handleEdit(e, props.todo.id)
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              value={editTodo}
              onChange={(e) => {
                setEditTodo(e.target.value)
              }}
              className="todos__single--test"
              ref={inputRef}
            />
          ) : props.todo?.isDone ? (
            <s className="todos__single--text">{props.todo.todo}</s>
          ) : (
            <span className="todos__single--text">{props.todo?.todo}</span>
          )}

          <div>
            <span className="icon">
              <AiFillEdit
                onClick={() => {
                  if (!edit && !props.todo.isDone) {
                    setEdit(!edit)
                  }
                }}
              />
            </span>
            <span
              className="icon"
              onClick={() => {
                handleDelete(props.todo.id)
              }}
            >
              <AiFillDelete />
            </span>
            <span
              className="icon"
              onClick={() => {
                handleDone(props.todo.id)
              }}
            >
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  )
}

export default SingleTodo
