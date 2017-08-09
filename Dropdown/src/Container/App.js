import * as React from 'react';
import '../global.css';
import {connect} from 'react-redux';

import styles from './App.css';

export class App extends React.Component {
    render() {
        const {main,children}=this.props;
        return (
            <div className={styles.wrapper}>
                {children}
                {main}
            </div>
        );
    }
}
export default App;

App.PropTypes = {
    /**
     * two or more React components: main, sidepane, etc
     */
    main               : React.PropTypes.node,
    /**
     * boolean to show/hide modal
     */
    messageAlertVisible: React.PropTypes.bool
};