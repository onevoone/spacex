import { ShipsPage, ShipDetailsPage } from './pages'


export const shipsRoutes = [
	{
		path: "/ships",
		exact: true,
		component: ShipsPage,
	},
	{
		path: "/ships/:id",
		exact: true,
		component: ShipDetailsPage,
	}
]
