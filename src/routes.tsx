import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { aboutRoutes } from './features/about'
import { shipsRoutes } from './features/ships'
import { commonRoutes } from './features/common'


interface SingleRoute {
	path: string;
	exact?: boolean;
	component: any;
}


const routes = [
	...aboutRoutes,
	...shipsRoutes,
	...commonRoutes,
	{ 
		path: "**",
		component: () => <div>not found</div>
	}
]


export const RoutesSwitcher = () => {
	const routesView = routes.map((route: SingleRoute, k: number) => (
		<Route 
			key={k} 
			path={route.path}
			exact={route.exact}
			component={route.component}
		/>
	))

	return (
		<Switch>
			{routesView}
		</Switch>
	)
}