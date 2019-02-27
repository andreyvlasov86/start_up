import React from 'react'
import Footer from './Todo/Footer'
import AddTodo from '../containers/Todo/AddTodo'
import VisibleTodoList from '../containers/Todo/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App