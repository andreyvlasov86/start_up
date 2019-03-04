import UserData from '../containers/Auth/UserData';
import Todo from '../containers/Todo';

const routerConfig = [
	{
		id: 1,
		path: "#",
		component: '',
        icon: 'fa fa-fw fa-user',
        name: 'User',
        subitems: [
			{
				id: 1,
				path: "/user",
				component: UserData,
				name: 'User',
			},
			{
				id: 2,
				path: "/todo",
				component: Todo,
				name: 'Todo',
			},
		]
	},

];

export default routerConfig