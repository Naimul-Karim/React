import {createContext , useContext} from 'react'

export const ToDoContext = createContext({
    ToDo: [
        {
            id: 1,
            todo: "Todo msg",
            complete: false,
        }
    ],
    addToDo: (todo)=>{},
    updateToDo: (id,todo)=>{},
    deleteToDo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useToDo = ()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider