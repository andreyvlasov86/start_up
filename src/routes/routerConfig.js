import UserData from '../components/Pages/Users/userData';
import usersList from '../components/Pages/Users/usersList';
import usersGroupsList from '../components/Pages/Users/usersGroupsList';
import DogsApp from '../components/Pages/Dogs/Dogs';


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
	{
		id: 6,
		path: baseUrl + "/groups/",
		component: usersGroupsList,
        icon: 'fa fa-fw fa-users',
        name: 'Groups',
        subitems: []
	},

];

export default routerConfig