import React from "react";
import { 
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import "./style.scss";
import { URLS } from "../shared/constants";
import { routes } from "./routes";
import { NotFound } from "../pages";
import { SideMenu } from "../core/components";

export const RouterRoulet = () => {
    return (
        <Router>
            <div className="container">
                <SideMenu routes={routes} />
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
            </div>
        </Router>
    )
}