import React from 'react';
import routerConfig from "./routerConfig";
import {Route} from 'react-router-dom';


export const routes = routerConfig.map(route => (
    <Route
        key={route.id}
        path={route.path}
        component={route.component}
    />
));

routerConfig.map(route => (
    route.subitems.map(subitem => (
        routes.push(
            <Route
                key={subitem.id}
                path={subitem.path}
                component={subitem.component}
            />)
    ))
));
