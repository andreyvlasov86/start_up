import React, {Component} from 'react'
import Footer from '../components/Todo/Footer'
import AddTodo from '../containers/Todo/AddTodo'
import VisibleTodoList from '../containers/Todo/VisibleTodoList'
import UserData from '../containers/Auth/UserData';
import Logout from '../containers/Auth/Logout'

export default class Main extends Component {

        constructor(props) {
                super(props);
        }

        render() {
                return(
                    <div>
                        <Logout />
                        <UserData />
                        <AddTodo />
                        <VisibleTodoList />
                        <Footer />
                    </div>
                )
        }
}