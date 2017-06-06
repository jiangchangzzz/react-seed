import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './style.scss';

class Footer extends Component {
    render() {
        return (
            <div styleName="gray">
                Footer
            </div>
        );
    }
}

export default CSSModules(Footer,styles);