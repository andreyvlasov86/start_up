import UserData from '../containers/Auth/UserData';
import Todo from '../containers/Todo';
import DataTableView from '../components/common/DataTableView';

const baseUrl = '/admin';

const routerConfig = [
	{
		id: 1,
		path: "#",
		component: UserData,
        icon: 'fa fa-fw fa-home',
        name: 'Test',
        subitems: [
			{
				id: 2,
				path: baseUrl + "/user",
				component: UserData,
				name: 'User',
			},
			{
				id: 3,
				path: baseUrl + "/todo",
				component: Todo,
				name: 'Todo',
			},
		]
	},
	{
		id: 4,
		path: baseUrl + "/dt_users/",
		component: DataTableView,
        icon: 'fa fa-fw fa-user',
        name: 'Users',
        subitems: []
	},

];

export default routerConfig