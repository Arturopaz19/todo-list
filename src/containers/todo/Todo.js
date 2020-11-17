import React from 'react'
import { tasks } from '../../helpers/tasks'
import Todo from '../../components/todo/Todo'

export default class TodoContainer extends React.Component {
   state = {
      todoTask: []
   }
   
   componentDidMount () {
      this.setState({
         todoTask: tasks
      })
   }

   render () {
      const { todoTask } = this.state
      return (
         <Todo todos={todoTask}/>
      )
   }
}