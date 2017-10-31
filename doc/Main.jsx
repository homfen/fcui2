

import './style.less';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import routing from './routing';


export default class Main extends Component {

    static childContextTypes = {
        skin: PropTypes.string
    }

    getChildContext() {
        return {
            skin: 'oneux4'
        };
    }

    render() {
        const path = routing.hasOwnProperty(this.props.path) ? this.props.path : 'button';
        const Demo = routing[path];
        return [
            <div key="menu" className="root-menu">hehe</div>,
            <div key="right" className="root-container">
                {<Demo/>}
            </div>
        ];
    }

}
