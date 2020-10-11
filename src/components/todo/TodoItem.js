import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
function TodoItem (props) {
   const { description, duration, left, isFinished, started } = props.task
   return (
      <Card className='task-card'>
         <Row>
            <Col>
               <h3>{description}</h3>
               <p>Duracion: {duration} min</p>
               <p>Restan: {left} min</p>
            </Col>
            <Col>
               {!started &&
                  <Button className={'btn-success'}>Iniciar</Button>
               }
            </Col>
         </Row>
      </Card>
   )
}
export default TodoItem
