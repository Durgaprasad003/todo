import React, { useState } from 'react'
import "./App.css"
export default function App() {
       const[todo,input]=useState("test")
        let[todolist,updatetodo]=useState([
          {
            id:1,
            task:"learn react"
          },
          {
            id:2,
            task:"learn angular"
          }
        ])
        function show(){
          let netid=3
           if(todo==="")
           {
            alert("Enter you task")
           } 
           else{
             let newtodo=[...todolist,
             {
             id:netid++,
              task:todo
             }];
              updatetodo(newtodo)
               input("")
           }
        }

        function deletetodo(id){
        let t=  todolist.filter((todo)=>{
                   return todo.id!=id
          })
    
          updatetodo(t)

        }
  return (
    <div className='container mt-5 w-50'>
    <h3 className='text-center'>Todo</h3>
            <div className='input-group'>
                    <input type="text" className='form-control' value={todo} onChange={(e)=>{
                     
                        input(e.target.value)
                        // console.log(todo)
                        // console.log(e.target.value)
                    }} />
                    <button className='btn btn-primary' onClick={show}>Add</button>           
            </div>
            <ul className='list-group mt-4'>
              {
                todolist.map((todo)=>{
                  return(
                    <li className='list-group-item'key={todo.id}><p >{todo.task}</p> <button onClick={()=>{deletetodo(todo.id)}} className='btn'>❌</button></li>
                  )
                })
              }
            </ul>
    </div>
  )
}
