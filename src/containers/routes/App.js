import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Todo from '../../components/todo/Todo'

function App() {
  return (
    <Switch>
      <Route 
        exact
        path='/home'
        render={() => <Todo />}
      />
      <Redirect from='/' to='/home' />
    </Switch>
  );
}

export default App
