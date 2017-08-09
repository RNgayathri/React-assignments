import React from 'react';
import styles from './Button.css';
import classNames from 'classnames';


class Button extends React.Component {

	render() {
		const {className, spanClassName, text, onClick} = this.props;
		return (
			<button className={classNames(className, styles.button)}
			        onClick={onClick ? onClick : noop=>noop}>
				<span className={classNames(spanClassName)}>{text}</span>
			</button>
		)
	}
}
export default Button;


Button.propTypes = {
	className: React.PropTypes.string,
	spanClassName: React.PropTypes.string,
	text: React.PropTypes.string,
	onClick: React.PropTypes.func
};
