import {createContext , useContext} from 'react'

export const ToDoContext = createContext({
    Todo: [
        {
            id: 1,
            todo: "Todo msg",
            complete: false,
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useToDo = ()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider