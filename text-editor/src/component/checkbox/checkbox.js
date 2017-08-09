import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './checkbox.css';


const Checkbox = ({
                      text,
                      className,
                      textClass,
                      disabled,
                      onClick,
                      wrapperClass,
                      checked,
                      id,
                  }) => {
    const uniqueId = id || text;

    return (
        <span className={classNames(styles.wrapper, wrapperClass)}>
      <input
          type="checkbox"
          id={uniqueId}
          disabled={disabled}
          className={styles.checkbox}
          checked={checked}
          onChange={(e) => onClick && onClick(e.target.checked, e)}
      />

      <label
          className={classNames(styles.alteredCheckbox, className, {
              [styles.alteredCheckBoxWithLabel]: text,
              [styles.disable]: disabled,
          })}
          htmlFor={uniqueId}
      />

            {text &&
            <label
                className={classNames(styles.label, textClass, { [styles.dimLabel]: disabled })}
                htmlFor={uniqueId}
            >
                {text}
            </label>}
    </span>
    );
};

export default Checkbox;




