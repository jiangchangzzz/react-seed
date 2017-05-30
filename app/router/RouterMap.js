import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import App from '../containers';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

class RouterMap extends Component{
    render(){
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route component={NotFound}/>
                    </Switch>
                </App>
            </Router>
        );
    }
}

export default RouterMap;