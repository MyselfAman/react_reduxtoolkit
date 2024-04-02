import { createSlice , nanoid} from '@reduxjs/toolkit'

// initial state can be object or array
const initialState = {
    todos : [{
        id: 1,
        text:"Hello World"
    }]
}

export const todoSlice = createSlice({
    name: 'todo', // name of store
    initialState,
    reducers:{ 
        // it contains property and function
        // u have access of state and action in a reducer
        // state give u refrence to current state
        // action give all the payload which will passed to add on state u can access using action.payload
        addTodo: (state,action) => {
            const todo = {
                 id: nanoid(),
                 text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter(data => 
                data.id !== action.payload)
        }
    }
})

// also have export reducer which u will get from todoSlice.actions
export const { addTodo , removeTodo} = todoSlice.actions
export default todoSlice.reducer