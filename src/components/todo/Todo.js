import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import useTodo from '../../containers/todo/Todo'
import TodoItem from './TodoItem'

function Todo () {
   const todos = useTodo()

   const list = Object.keys(todos).map(key => {
      return(
         <TodoItem 
            key={key}
            task={todos[key]}
         />
      )
   })
   return (
      <Container>
         <h1>Todo Component</h1>
         <Row>
            <Col>{!list ? <h1>Cargando...</h1> : list}</Col>
            <Col></Col>
         </Row>
      </Container>
   )
}

export default Todo
