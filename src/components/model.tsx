import React, { useReducer } from "react"

export interface Todo {
  id: number
  todo: string
  isDone: boolean
}

// type Actions =
//   | { type: "add"; payload: string }
//   | { type: "remove"; payload: number }
//   | { type: "done"; payload: number }

// const TodoReducer = (state: Todo[], action: Actions) => {
//   if (action.type === "add") {
//     return [...state, { id: Date.now(), todo: action.payload, isDone: false }]
//   } else if (action.type === "remove") {
//   } else if (action.type === "done") {
//   }
// }

// const ReducerExample = () => {

//   const [state,dispatch] = useReducer(TodoReducer,[])

//   return (
//     <div>model</div>
//   )
// }

// export ReducerExample
