import * as React from 'react';
import {connect} from 'react-redux';
import styles from './App.css';
import '../../global.css'

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

export function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(App);

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