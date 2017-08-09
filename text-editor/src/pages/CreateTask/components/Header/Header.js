import React from 'react'
import styles from './Header.css';
import classNames from 'classnames';
import '../../../../flaticon/font/flaticon.css'

class Header extends React.Component {
    render() {
        return (
            <div className={styles.Header}>
                <span className={classNames("flaticon-write",styles.flaticonWrite)}>Task</span>
            </div>
        );
    }
}
export default Header;