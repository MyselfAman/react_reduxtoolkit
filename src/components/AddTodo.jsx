import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoHandler = (e) =>{
        console.log("akahska");
        e.preventDefault();
        dispatch(addTodo(input)) // dispatch use addTodo reducer to add change in state
        setInput(''); 
    }
  return (
    <div>

            <input 
                type="text" 
                name="" 
                id="" 
                placeholder='Enter a todo...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
        <button onClick={addTodoHandler}>
            Add Todo
        </button>
    </div>
  )
}

export default AddTodo