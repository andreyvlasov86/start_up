import React, {Component} from 'react'
import Footer from '../../components/Todo/Footer'
import AddTodo from '../../containers/Todo/AddTodo'
import VisibleTodoList from '../../containers/Todo/VisibleTodoList'


export default class Todo extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AddTodo/>
				<VisibleTodoList/>
				<Footer/>
			</div>
		)
	}
}