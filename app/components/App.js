import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.scss';

class App extends Component{
    render(){
        return (
            <div styleName="blue">blue in world</div>
        );
    }
}

export default CSSModules(App,styles);