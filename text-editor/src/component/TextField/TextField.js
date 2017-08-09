import React from 'react';
import  classNames from 'classnames';
import styles from './TextField.css'
class TextField extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.onChange(event.target.value);
    }
        render() {
        const {className, value, type,label,placeholder,defaultvalue,maxlength,onClick,checked,searchLabel} = this.props;
        return (

                    <label className={classNames(styles.label,searchLabel)}>{label}
                <input type={type}
                       className={className}
                       value={value}
                       placeholder={placeholder}
                       defaultValue={defaultvalue}
                       maxLength={maxlength}
                       onChange={this.handleChange}
                       checked={checked}
                       onClick={onClick ? onClick : noop=>noop}
                />
                    </label>



        );
    }
}
export default TextField;