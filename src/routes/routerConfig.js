import UserData from '../components/Pages/Users/userData';
import usersList from '../components/Pages/Users/usersList';
import DogsApp from '../components/Dogs/Dogs';


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

		]
	},
	{
		id: 4,
		path: baseUrl + "/dt_users/",
		component: usersList,
        icon: 'fa fa-fw fa-user',
        name: 'Users',
        subitems: []
	},
	{
		id: 5,
		path: baseUrl + "/dogs/",
		component: DogsApp,
        icon: 'fa fa-fw fa-dog',
        name: 'Dogs',
        subitems: []
	},

];

export default routerConfig