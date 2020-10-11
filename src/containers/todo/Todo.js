import { useEffect, useState } from 'react'
import { tasks } from '../../helpers/tasks'

const useTodo = () => {
   const [todos, setTodos] = useState([])
   useEffect(()=>{
      setTodos(tasks)
      return () => {}
   },[])
   return todos
}

export default useTodo