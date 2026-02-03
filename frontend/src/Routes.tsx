import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        </HashRouter>
    );
}

export default Routes;