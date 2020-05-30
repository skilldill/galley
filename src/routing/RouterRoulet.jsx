import React from "react";
import { 
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { URLS } from "../shared/constants";
import { routes } from "./routes";
import { NotFound } from "../pages";

export const RouterRoulet = () => {
    return (
        <Router>
            <Route path="/">
                <Redirect to={URLS.TASKS} />
            </Route>
            <Switch>
                {
                    routes.map((route, i) => 
                        <Route 
                            key={i}
                            path={route.path}
                            component={route.component}
                        />
                    )
                }
                <NotFound />
            </Switch>
        </Router>
    )
}