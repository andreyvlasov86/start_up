import UserData from '../containers/Auth/UserData';
import Todo from '../containers/Todo';

const routerConfig = [
	{
		id: 1,
		path: "/user",
		component: UserData,
        icon: 'fa fa-fw fa-user',
        name: 'Home',
        subitems: []
	},
	{
		id: 2,
		path: "/todo",
		component: Todo,
		icon: 'fa fa-fw fa-home',
        name: 'Todo',
        subitems: []
	},
];

export default routerConfig